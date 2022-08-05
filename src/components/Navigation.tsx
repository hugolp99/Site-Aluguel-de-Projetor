import NavBarBS from "./NavBarBS/NavBarBS";
import { Home } from "./Screens/Home/Home";
import { Rent } from "./Screens/Rent/Rent";
import {
    Routes,
    Route,
} from "react-router-dom";
import { Buttonwhatsapp } from "../assets/Buttons/Button";

export function Navigation () {
    return (
        <>
        <NavBarBS />
        <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/rent" element={<Rent />}/>
        </Routes>
        </div>
        <Buttonwhatsapp />
        </>

    )
}