import { useEffect, useMemo, useRef } from 'react';
import { Suspense } from 'react';

import { useAnimations } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Bone,
  Group,
  LinearToneMapping,
  LoopOnce,
  Mesh,
  SRGBColorSpace,
} from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { CONTACT_KEYS } from '@/constants/others';
import { cn } from '@/lib/utils';
import { useHomeStore } from '@/stores/home/store';

import { charExpressions } from '../constant';

function Model({ gltf, showChar = false }: { gltf: GLTF; showChar?: boolean }) {
  const group = useRef<Group>(null);
  const { scene, animations } = gltf;
  const { actions } = useAnimations(animations, group);

  const started = useRef(false);
  const meshRefs = useRef<Mesh[]>([]);
  const bonesRef = useRef<{ chest: Bone | null; spine: Bone | null }>({
    chest: null,
    spine: null,
  });

  const chatTopic = useHomeStore((state) => state.chatTopic);

  useEffect(() => {
    meshRefs.current = [];
    scene.traverse((obj) => {
      if (obj instanceof Mesh && obj.morphTargetDictionary) {
        meshRefs.current.push(obj);
      }
      if (obj instanceof Bone) {
        if (obj.name === 'J_Bip_C_Chest') bonesRef.current.chest = obj;
        if (obj.name === 'J_Bip_C_Spine') bonesRef.current.spine = obj;
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    if (!showChar) return;

    if (!started.current) {
      const action = actions['flipBody'];
      if (action) {
        action.setLoop(LoopOnce, 1);
        action.clampWhenFinished = true;
        action.play();
        started.current = true;
      }
    }

    const t = clock.getElapsedTime();

    // Kedip setiap 3 detik jika tidak nullish
    const nullishBlinkingTopicCriteria = [CONTACT_KEYS.IN];

    if (!nullishBlinkingTopicCriteria.find((el) => el === chatTopic)) {
      const blinkCycle = t % 3;
      const isBlinking = blinkCycle < 0.15;
      const val = isBlinking ? 1 : 0;

      meshRefs.current.forEach((mesh) => {
        if (!mesh.morphTargetInfluences || !mesh.morphTargetDictionary) return;
        const dict = mesh.morphTargetDictionary;
        const influences = mesh.morphTargetInfluences;

        if (dict['Fcl_EYE_Close'] !== undefined)
          influences[dict['Fcl_EYE_Close']] = val;
      });
    }

    // Breathing
    const breath = Math.sin(t * 0.8) * 0.015;
    if (bonesRef.current.chest) bonesRef.current.chest.rotation.x = breath;
    if (bonesRef.current.spine)
      bonesRef.current.spine.rotation.x = breath * 0.5;
  });

  // Ekspresi berdasarkan chatTopic
  const expression = useMemo(
    () => charExpressions?.[chatTopic || 'neutral'] || charExpressions.neutral,
    [chatTopic],
  );
  useEffect(() => {
    meshRefs.current.forEach((mesh) => {
      if (!mesh.morphTargetInfluences || !mesh.morphTargetDictionary) return;
      const dict = mesh.morphTargetDictionary;
      const influences = mesh.morphTargetInfluences;

      // Reset semua ekspresi dulu
      Object.keys(charExpressions).forEach((topic) => {
        Object.keys(charExpressions[topic]).forEach((key) => {
          if (dict[key] !== undefined) influences[dict[key]] = 0;
        });
      });

      // Apply ekspresi baru
      Object.entries(expression).forEach(([key, value]) => {
        if (dict[key] !== undefined) influences[dict[key]] = value;
      });
    });
  }, [expression]);

  return <primitive ref={group} object={scene} position={[-0.15, -1.33, 0]} />;
}

export function Character({ showChar }: { showChar?: boolean }) {
  const { gltf } = useHomeStore((state) => state);

  if (!gltf) return <></>;

  return (
    <Canvas
      className={cn(
        'fixed -inset-y-70 w-full h-dvh pointer-events-none',
        !showChar && 'hidden',
      )}
      frameloop={showChar ? 'always' : 'never'}
      camera={{ position: [-2, -1, 6], fov: 9 }}
      gl={{
        alpha: true,
        outputColorSpace: SRGBColorSpace,
        toneMapping: LinearToneMapping,
        toneMappingExposure: 3.5,
      }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-1, 0.5, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Model gltf={gltf} showChar={showChar} />
      </Suspense>
    </Canvas>
  );
}
