import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';
import './App.css'
import ItemSearch from './components/ItemSearch/ItemSearch';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ItemComponent from './components/ItemComponent/ItemComponent';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

function App() {

  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
   
      children: [
        { index: true ,element: <Home /> },
        { path: "/:search",element: < ItemSearch /> },
        { path: ":search/:search/details/:meal",element: <ItemComponent /> },
        { path: "*", element: < NotFound/> },
       
      ],
    },
  ]);


  return (
    <>
        <RouterProvider router={routes} />  

      
    </>
  )
}

export default App
