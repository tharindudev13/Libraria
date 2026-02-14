import { useEffect, useState } from "react";
import Book from "../components/Book";
import { Link } from "react-router";
import { useDispatch} from "react-redux";
import { getBooks} from "../features/BookSlice";


function Home(){

    const [books,setBooks] = useState([])
    const dispatch = useDispatch()
    
    // const book = useSelector((state) => {return state.book})

    useEffect(() => {
    
      const getAllBooks = async () => {
        try {
          const response = await fetch('http://localhost:8090/api/v1/books/getallbooks');
          const result = await response.json();
          setBooks(result);
          dispatch(getBooks(result))
        } catch (error) {
          console.error("Fetch failed:", error);
        }
      };
      getAllBooks();
  }, []); 


   const categories = books.reduce((acc, book) => {
        const cat = book.category || "General";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(book);
          return acc;
    }, {});
        

    return(
        <>
       <div className="p-6 md:p-12 bg-[#0F172A] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-10 border-b border-[#334155] pb-4">All Books</h1>

      {Object.keys(categories).map((categoryName) => (
        <section key={categoryName} className="mb-12">
          {/* Category Header */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold text-[#38BDF8] uppercase tracking-wider">
              {categoryName} 
            </h2>
            <div className="h-px grow bg-[#334155]"></div>
              <span className="text-sm ml-1 text-[#38BDF8] uppercase"> <Link to={`category/${categoryName}`}> see all </Link></span>
          </div>
          
          {/* 3-Column Grid for PC */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories[categoryName].slice(0, 3).map((book) => (
              <Book key={book.isbn} book={book} />
            ))}
          </div>
        </section>
      ))}
    </div>
        </>
    )
}

export default Home