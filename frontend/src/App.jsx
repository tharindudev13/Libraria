import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router";
import Navbar from "./components/navbar";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";

function App(){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element = {<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    )
  )

return(
  <>
    <RouterProvider router={router} />
  </>
)
}

export default App;