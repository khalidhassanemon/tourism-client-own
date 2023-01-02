import { createBrowserRouter } from 'react-router-dom';
import Category from '../../Category/Category';
import Home from '../../Home/Home';
import Main from '../../Layout/Main';
import News from '../../News/News';

export const routes = createBrowserRouter([
    {
          path:'/',
          element:<Main></Main>,
          children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<Category></Category>
            },
            {
                path:'/news/:id',
                element:<News></News>
            }
          ]
    }
])
