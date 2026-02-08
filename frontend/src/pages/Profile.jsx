import { User, Mail, Calendar, BookOpen, Clock, History } from 'lucide-react';
import {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLends } from '../features/Lends';
// import { useEffect,useState } from 'react';

const Profile = () => {
  // Pulling the user from your Redux store
  const { user } = useSelector((state) => state.user);
  // const lend = useSelector((state) => state.lend.lends);
  const[lends,setLends] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
        const fetchLendingHistory = async () => {
          try {
            const response = await fetch(`http://localhost:8090/api/v1/lends/getlends/${user.email}`);
            const data = await response.json();
            setLends(data);
            dispatch(getLends(data))
            // Process the data as needed
           }catch (error) {
            console.error("Error fetching lending history:", error);
        }
      }
      fetchLendingHistory();
   
    }, []);  
  
  

  // Dummy data for Lending History
  const lendingHistory = [
    { id: 1, title: "Clean Code", date: "2023-11-12", status: "Returned" },
    { id: 2, title: "The Pragmatic Programmer", date: "2023-10-05", status: "Returned" },
  ];

  // Dummy data for Current Lends
  const currentLends = [
    { id: 101, title: "React Design Patterns", dueDate: "2024-02-10", fine: "0.00" },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* SECTION 1: Personal Details Header */}
        <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#334155] flex flex-col md:flex-row items-center gap-6">
          <div className="bg-[#38BDF8]/10 p-4 rounded-full border-2 border-[#38BDF8]">
            <User size={48} className="text-[#38BDF8]" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">{user?.fName || 'User'} {user?.lName || 'Profile'}</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-[#94A3B8]">
              <span className="flex items-center gap-2"><Mail size={16}/> {user?.email || 'email@example.com'}</span>
              <span className="flex items-center gap-2"><Calendar size={16}/> Joined Jan 2024</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* SECTION 2: Currently Borrowed (1/3 width) */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="text-[#38BDF8]" /> Current Lends
            </h3>
            {currentLends.map(book => (
              <div key={book.id} className="bg-[#1E293B] border-l-4 border-[#38BDF8] p-4 rounded-r-xl">
                <h4 className="font-bold">{book.title}</h4>
                <p className="text-sm text-[#94A3B8] mt-1">Due: {book.dueDate}</p>
                <div className="mt-3 flex justify-between items-center text-xs">
                   <span className="bg-[#0F172A] px-2 py-1 rounded text-[#38BDF8]">Fine: ${book.fine}</span>
                   <button className="text-[#38BDF8] hover:underline">Renew</button>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 3: Lending History (2/3 width) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <History className="text-[#818CF8]" /> Lending History
            </h3>
            <div className="bg-[#1E293B] rounded-2xl overflow-hidden border border-[#334155]">
              <table className="w-full text-left">
                <thead className="bg-[#0F172A] text-[#94A3B8] text-sm">
                  <tr>
                    <th className="p-4">Book Title</th>
                    <th className="p-4">Returned Date</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#334155]">
                  {lends.map((item,index) => (
                    <tr key={index} className="hover:bg-[#334155]/30 transition-colors">
                      <td className="p-4 font-medium">{item.isbn}</td>
                      <td className="p-4 text-sm text-[#94A3B8]">{item.isbn}</td>
                      <td className="p-4">
                        <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full border border-green-500/20">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;