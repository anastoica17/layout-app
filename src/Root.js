import {Outlet} from 'react-router-dom';
import NavigatorBar from "./NavigatorBar";


function Root() {

    return <>
        <NavigatorBar/>
        <Outlet/>
    </>
}

export default Root;