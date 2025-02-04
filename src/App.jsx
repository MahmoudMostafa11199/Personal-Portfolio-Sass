import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { initAOS } from './utils/aos-animation';

import AppLayout from './shared/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
// import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        // element: <Footer />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    initAOS();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
