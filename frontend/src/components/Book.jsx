import {  User, CheckCircle2, XCircle, ArrowRight ,Blocks, Languages,  Key } from 'lucide-react';

const Book = ({ book }) => {
  // Logic to determine availability colors
  const isAvailable = book.available_copies > 0;

  return (
   <div className="flex flex-col sm:flex-row bg-[#1E293B] border border-[#334155] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5 min-h-55">
      
      {/* 1. Left Side: Image Container */}
      <div className="w-full sm:w-1/3 bg-[#0F172A] p-4 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-[#334155]">
        {book.image_url ? (
          <img 
            src={book.image_url} 
            alt={book.title} 
            className="max-h-48 w-full object-contain" // object-contain ensures the full picture shows
          />
        ) : (
          <Book size={64} className="text-[#334155]" />
        )}
      </div>

      {/* 2. Right Side: Content Container */}
      <div className="w-full sm:w-2/3 p-6 flex flex-col justify-between">
        <div>
          {/* Header & Status */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-[#F8FAFC] leading-tight pr-4">
              {book.title || "Untitled Book"}
            </h3>
            <span className={`shrink-0 flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
              isAvailable 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
            }`}>
              {isAvailable ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
              {isAvailable ? 'Available' : 'Out of Stock'}
            </span>
          </div>

          {/* Author */}
          <div className="flex items-center gap-2 text-[#94A3B8] mb-4">
            <User size={16} />
            <span className="text-sm font-medium">{book.author || "Unknown Author"}</span>
            <Blocks size={16} className="ml-2" />
            <span className="text-sm font-medium">{book.category || "General"}</span> <br />
          </div>
          <div className="flex items-center gap-2 text-[#94A3B8] mb-4">
            <Key size={16} />
            <span className="text-sm font-medium">{book.isbn}</span>
            <Languages size={16} className="ml-2" />
            <span className="text-sm font-medium">{book.language || "English"}</span> <br />
          </div>
        </div>

        {/* Footer: Stats & Button */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#334155]/50">
          <div className="text-xs">
            <p className="text-[#64748B]">Copies Available</p>
            <p className="text-[#F8FAFC] font-semibold">
              {book.available_copies} <span className="text-[#64748B] font-normal">/ {book.total_copies}</span>
            </p>
          </div>

          <button 
            disabled={!isAvailable}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-sm transition-all ${
              isAvailable 
                ? 'bg-[#38BDF8] text-[#0F172A] hover:bg-[#7dd3fc] active:scale-95 shadow-lg shadow-sky-500/20' 
                : 'bg-[#334155] text-[#64748B] cursor-not-allowed'
            }`}
          >
            Reserve
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;