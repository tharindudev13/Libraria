import { useSelector } from "react-redux"
import Book from "../components/Book";

function Categories(props){

    const books = useSelector((state) => {return state.book.books})

    const categories = books.reduce((acc, book) => {
        const cat = book.category || "General";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(book);
        return acc;
    }, {});

    const category = props.category
return(
    <>
       <div className="p-6 md:p-12 bg-[#0F172A] min-h-screen text-white">

        <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold text-[#38BDF8] uppercase tracking-wider">
              {category} 
            </h2>
            <div className="h-px grow bg-[#334155]"></div>
              <span className="text-sm ml-1 text-[#38BDF8] uppercase"></span>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories[category].map((book) => (
              <Book key={book.isbn} book={book} />
            ))}
          </div>
        </div>  
    </>
)
}

export default Categories