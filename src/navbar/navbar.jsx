// export default function NavBar() {
  
//   return (
//     <nav className="w-full px-5 py-2.5 border-black-100 border-b bg-gray-700 backdrop-blur-sm shadow-sm text-white">
//       <div className="w-full container mx-auto flex items-center justify-between">
//         <h1 className="text-3xl">🌍 World Clock </h1>
//         <input
//             className="shadow-sm appearance-none border border-blue-200 rounded w-[400px] py-1 px-3 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-200 focus:ring-offset-2"
//             placeholder="🔍 Search"
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
            
//           />
//         <ul className="flex gap-10 mr-8">
//           <li><a href="/home" className="hover:underline">Home</a></li>
//           <li><a href="/all" className="hover:underline">All</a></li>
//         </ul>
  
        
          
//       </div>
//     </nav>
    
//   );
// }
import { Link } from "react-router-dom";
import { SearchBar } from "../page/Home";
export default function NavBar({ searchQuery, setSearchQuery, filteredCities }) {
  return (
    <nav className="w-full px-5 py-2.5 border-black-100 border-b bg-gray-700 backdrop-blur-sm shadow-sm text-white">
      <div className="w-full container mx-auto flex items-center justify-between">
        <h1 className="text-3xl">🌍 World Clock </h1>

        <input
          className="shadow-sm appearance-none border border-blue-200 rounded w-[400px] py-1 px-3 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-200 focus:ring-offset-2"
          placeholder="🔍 Search"
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value); 
            filteredCities();
          }}
        />

        <ul className="flex gap-10 mr-8">
          <li>
            <Link to={"/"} className="hover:bg-gray-100"> Home </Link>
            </li>
          <li>
            <Link to={"/all"}>All</Link>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}
