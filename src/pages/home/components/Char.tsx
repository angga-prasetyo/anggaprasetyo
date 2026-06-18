import { useEffect, useRef } from 'react';
import { Suspense } from 'react';

import { useGLTF, useAnimations } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group, LoopOnce, Mesh, SRGBColorSpace } from 'three';
import { LinearToneMapping } from 'three';
import { Bone } from 'three';

function Model() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('/ap-char_v1.glb');
  const { actions } = useAnimations(animations, group);

  const started = useRef(false);
  const meshRefs = useRef<Mesh[]>([]);
  const bonesRef = useRef<{ chest: Bone | null; spine: Bone | null }>({
    chest: null,
    spine: null,
  });

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
    // Play animasi sekali
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

    // Kedip setiap 3 detik
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

    // Breathing
    const breath = Math.sin(t * 0.8) * 0.015;
    if (bonesRef.current.chest) bonesRef.current.chest.rotation.x = breath;
    if (bonesRef.current.spine)
      bonesRef.current.spine.rotation.x = breath * 0.5;
  });

  return <primitive ref={group} object={scene} position={[-0.1, -1.2, 0]} />;
}

export function Character() {
  return (
    <Canvas
      className="fixed w-full h-screen"
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
        <Model />
      </Suspense>
    </Canvas>
  );
}
