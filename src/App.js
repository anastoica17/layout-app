import './App.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from "./Root";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Error from "./pages/Error";

const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <Error/>,
            children: [
                {
                    path: "/",
                    element: <Home/>

                },
                {
                    path: "/about",
                    element: <AboutUs/>
                },
                {
                    path: "/pages",
                    element: <Pages/>
                },
                {
                    path: "/blog",
                    element: <Blog/>
                }
            ]
        }
    ])
;

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
