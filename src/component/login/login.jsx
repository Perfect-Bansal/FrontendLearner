import { Link, useNavigate } from "react-router-dom";
export default function Login(){

    const navigate = useNavigate();
    const handelsubmit = (e)=>{
        e.preventDefault()
        alert("Logged In")
        navigate("/home")
    }

    return(
        <div className="bg-gray-200 shadow-md max rounded-2xl w-[400px] p-10 mx-auto mt-20">
            <div className="justify-center flex text-2xl">
                <h1>Login</h1>
            </div>
            <form onSubmit={handelsubmit}>
               <div className="flex flex-col gap-2">

            <div className="mb-6">
                <label className="block mb-1">Enter your email</label>
                <input
                    type="email"
                    placeholder="Email"
                        className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-6">
                <label className="block mb-1">Enter your password</label>
                <input
                    type="password"
                    placeholder="Password"
                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            type="submit" 
            >
                Login

            </button>

            </div> 
            <div> 
                Don't have a account ?
               <Link to="/signup" className="hover:underline  hover:text-blue-700 ml-2">Signup</Link>
            </div>
            </form>
        
        </div>
    );
} 
