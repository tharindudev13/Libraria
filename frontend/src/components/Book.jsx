import React from 'react';
import { BookOpen, User, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const BookCard = ({ book }) => {
  // Logic to determine availability colors
  const isAvailable = book.available_copies > 0;

  return (
    <div className="group relative bg-[#1E293B] border border-[#334155] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1">
      
      {/* 1. Thumbnail / Cover Image */}
      <div className="relative h-64 w-full bg-[#0F172A] overflow-hidden">
        {book.image_url ? (
          <img 
            src={book.image_url} 
            alt={book.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-[#334155]">
            <BookOpen size={48} />
          </div>
        )}
        
        {/* 2. Availability Badge (Overlaid on Image) */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border ${
          isAvailable 
            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
            : 'bg-rose-500/20 text-rose-400 border-rose-500/30'
        }`}>
          <div className="flex items-center gap-1">
            {isAvailable ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
            {isAvailable ? 'Available' : 'Out of Stock'}
          </div>
        </div>
      </div>

      {/* 3. Book Details */}
      <div className="p-5">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-[#F8FAFC] line-clamp-1 group-hover:text-[#38BDF8] transition-colors">
            {book.title || "Untitled Book"}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-[#94A3B8]">
            <User size={14} />
            <span className="text-sm truncate">{book.author || "Unknown Author"}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="text-xs text-[#64748B]">
            <span className="block font-medium text-[#94A3B8]">{book.available_copies} of {book.total_copies}</span>
            copies left
          </div>

          {/* 4. Lend / Borrow Button */}
          <button 
            disabled={!isAvailable}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              isAvailable 
                ? 'bg-[#38BDF8] text-[#0F172A] hover:bg-[#7dd3fc] active:scale-95' 
                : 'bg-[#334155] text-[#64748B] cursor-not-allowed'
            }`}
          >
            Lend
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;