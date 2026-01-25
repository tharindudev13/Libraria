import { Outlet } from "react-router"
import Navbar from "../components/navbar"
import Login from "../pages/Login"
// import { useSelector } from "react-redux"
import { useEffect } from "react"

function RootLayout(){

    // const {isLoggedin } = useSelector((state) => state.user) 
    useEffect(()=>{
        
    })
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