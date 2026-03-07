import {History} from "lucide-react";

const AllLends = () => {

    const dummyLends = [{"id": 1,"user" : "Tharindu","title": "Book 1", "status": "Due"},
        {"id": 2,"user" : "Kavindu","title": "Book 2", "status": "Returned"},
        {"id": 3,"user" : "Pasindu","title": "Book 3", "status": "Due"},
        {"id": 4,"user" : "Ravindu","title": "Book 4", "status": "Due"},]

    return(
        <>
            <h3 className="mt-2 mb-2  text-xl font-semibold flex items-center gap-2">
                <History className="text-[#818CF8]" /> Lending History
            </h3>
            <div className="bg-[#1E293B] rounded-2xl overflow-hidden border border-[#334155]">
                <table className="w-full text-left">
                    <thead className="bg-[#0F172A] text-[#94A3B8] text-sm">
                    <tr>
                        <th className="p-4">Lend Id</th>
                        <th className="p-4">User</th>
                        <th className="p-4">Title</th>
                        <th className="p-4">Status</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-[#334155]">
                    {dummyLends.map((lend) => (
                        <tr key={lend.id} className="hover:bg-[#334155]/30 transition-colors">
                            <td className="p-4 font-medium">{lend.id}</td>
                            <td className="p-4 text-sm text-[#94A3B8]">{lend.user}</td>
                            <td className="p-4 text-sm text-[#94A3B8]">{lend.title}</td>
                            <td className="p-4">
                          {lend.status == "Due" ? <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full border border-green-500/20">{lend.status}</span> :
                          <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-1 rounded-full border border-amber-500/20">{lend.status}</span>}
                            </td>
                            <td>
                                {lend.status == "Due" &&
                                    <button className="text-xs bg-green-500/10 text-green-400 border-green-500/20 rounded-full border px-2 py-1 cursor-pointer mx-3">
                                        Mark As Returned</button>}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AllLends