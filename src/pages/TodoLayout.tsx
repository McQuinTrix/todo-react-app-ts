import {Outlet} from "react-router";

function TodoLayout() {
    return (
        <>
            <h1>Navbar</h1>
            <Outlet/>
        </>
    )
}

export default TodoLayout;
