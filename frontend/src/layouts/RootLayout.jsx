import { Outlet } from "react-router"
import Navbar from "../components/navbar"

function RootLayout(){

    return(
        <>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
        </>
    )

}

export default RootLayout