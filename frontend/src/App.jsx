import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Categories from "./pages/Categories";

function App(){

  const books = useSelector((state) => {return state.book.books})
  
  const categories = books.reduce((acc, book) => {
        const cat = book.category || "General";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(book);
        return acc;
    }, {});

    
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element = {<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login/>} />
        {Object.keys(categories).map((category) =>(
          <Route path={`category/${category}`} element={<Categories category={category}/>} />
        ))}
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