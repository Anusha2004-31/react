
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./Features/Authentication/SingUp";

import { Login } from "./Features/Authentication/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
