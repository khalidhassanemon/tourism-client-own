import { createBrowserRouter } from 'react-router-dom';
import Category from '../../Category/Category';
import Home from '../../Home/Home';
import Main from '../../Layout/Main';
import Hotel from '../../Hotel/Hotel';
import Login from '../../Login/Login';
import Register from '../../Register/Register';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import TermsAndConditions from '../../Other/TermsAndConditions/TermsAndConditions';
import Profile from '../../Others/Profile/Profile';

export const routes = createBrowserRouter([
    {
          path:'/',
          element:<Main></Main>,
          children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch(`https://tourism-news-server.vercel.app/hotel`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://tourism-news-server.vercel.app/category/${params.id}`)
            },
            {
                path:'/hotel/:id',
                element:<PrivateRoute><Hotel></Hotel></PrivateRoute>,
                loader: ({params})=>fetch(`https://tourism-news-server.vercel.app/hotel/${params.id}`)
            },
            {
                path:'/login/',
                element:<Login></Login>
            },
            {
                path:'/register/',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<TermsAndConditions></TermsAndConditions>
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }
          ]
    }
])
