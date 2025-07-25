import {Outlet} from "react-router";
import {MegaMenu} from "primereact/megamenu";

function TodoLayout() {
    const items: any[] = [];
    const start = (
        <h3>To Do App</h3>
    );

    return (
        <>
            <MegaMenu
                model={items}
                orientation="horizontal"
                start={start}
                breakpoint="960px"
                className="p-3 surface-0 shadow-2"
                style={{ borderRadius: '3rem' }} />

            <Outlet/>
        </>
    )
}

export default TodoLayout;
