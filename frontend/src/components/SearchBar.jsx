import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import Book from "./Book";


function SearchBar(props){

    const [searchTerm,setSearchTerm] = useState("")
    const [searchResults,setSerchResults] = useState([]);


    
    
    useEffect(()=>{
        const searchBooks = async () => {
          try{
            const response = await fetch(`http://localhost:8090/api/v1/books/search?keyword=${searchTerm}`)
            const result = await response.json()
            setSerchResults(result)        
          }catch (error){
            console.error("Search failed:", error);
    
          }
        }
        searchBooks()
      },[searchTerm])

    let filterSearchResults = searchResults
    if(props.category != ""){
        filterSearchResults = searchResults.filter(book => book.category === props.category)
    }
    

    return(
        <>
        <div className="max-w-7xl mx-auto mb-12">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#64748B] group-focus-within:text-[#38BDF8] transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search by title, author,category or ISBN..."
            className="w-full bg-[#1E293B] border border-[#334155] text-[#F8FAFC] text-sm rounded-2xl block pl-12 p-4 focus:ring-2 focus:ring-[#38BDF8]/50 focus:border-[#38BDF8] outline-none transition-all shadow-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Results Counter */}
        <p className="mt-3 text-s text-[#64748B] ml-2">
          Showing {filterSearchResults.length} book(s)
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8">
        {filterSearchResults.map((book) => (
          <Book key={book.isbn} book={book} />
        ))}
        </div>
      </div>

        </>
    )

}

export default SearchBar