import './App.css'
import {Route, Routes} from "react-router";
import Auth from "./pages/Auth.tsx";
import TodoLayout from "./pages/TodoLayout.tsx";

function App() {

    /*
    if (!isAuthenticated) {
        <Route index element={<Auth />} />
    }
     */

    return (
        <>
            <Routes>
                <Route index element={<TodoLayout/>}/>
            </Routes>
        </>
    )
}

export default App
