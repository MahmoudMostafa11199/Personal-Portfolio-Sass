import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './shared/AppLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
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
  return <RouterProvider router={router} />;
}

export default App;
