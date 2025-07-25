import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Auth from "./pages/Auth.tsx";
import TodoLayout from "./pages/TodoLayout.tsx";
import ToDoList from "./pages/ToDoList.tsx";

function App() {

    /*
    if (!isAuthenticated) {
        <Route index element={<Auth />} />
    }
     */

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoLayout />}>
                    <Route index element={<ToDoList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
