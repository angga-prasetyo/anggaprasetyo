import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/routes';

import { useAudio } from './hooks/useAudio';

function App() {
  const { bgmHTML } = useAudio();
  return (
    <HelmetProvider>
      {bgmHTML}
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
