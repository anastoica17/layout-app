import {Link} from "react-router-dom";

const menuItems = [
    {
        name: "Home",
        route: "home"
    },
    {
        name: "About Us",
        route: "about"
    },
    {
        name: "Pages",
        route: "pages"
    },
    {
        name: "Blog",
        route: "blog"
    },
    {
        name: "Contact",
        route: "contact"
    }
];

function NavigatorBar() {
    return <>
        <nav className="navigator">
            <ul>
                {menuItems.map((item) => (
                    <li key={item.route} className="menuItems">
                        <Link to={`/${item.route}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        < /nav>
    </>
}

export default NavigatorBar;