import { createBrowserRouter } from 'react-router-dom';
import Category from '../../Category/Category';
import Home from '../../Home/Home';
import Main from '../../Layout/Main';
import Hotel from '../../Hotel/Hotel';
import Login from '../../Login/Login';
import Register from '../../Register/Register';

export const routes = createBrowserRouter([
    {
          path:'/',
          element:<Main></Main>,
          children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch(`http://localhost:5000/hotel`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/hotel/:id',
                element:<Hotel></Hotel>,
                loader: ({params})=>fetch(`http://localhost:5000/hotel/${params.id}`)
            },
            {
                path:'/login/',
                element:<Login></Login>
            },
            {
                path:'/register/',
                element:<Register></Register>
            }
          ]
    }
])
