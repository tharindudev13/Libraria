import { useEffect, useState } from "react";
import Book from "../components/Book";

function Home(){

    const [books,setBooks] = useState([])

    useEffect(() => {
    
    const getAllBooks = async () => {
      try {
        const response = await fetch('http://localhost:8090/api/v1/books/getallbooks');
        const result = await response.json();
        setBooks(result);
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

    console.log(books);


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
            <div className="h-[1px] flex-grow bg-[#334155]"></div>
          </div>

          {/* 3-Column Grid for PC */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories[categoryName].map((book) => (
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