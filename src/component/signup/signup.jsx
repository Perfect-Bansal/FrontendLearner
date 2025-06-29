import { Link } from "react-router-dom";
export default function SignUp(){
    return(
        <div className="bg-gray-200 shadow-2xl w-[400px] rounded-md p-10 mx-auto mt-20">
            <div className="flex flex-col gap-2">
                <div className="justify-center flex p-2 text-2xl">
                    Sign-Up
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Enter your Username</label>
                    <input className="bg-white w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="username"
                    type="Username"
                    ></input>
                 </div>

                 <div className="mb-4">
                    <label className="block mb-1"> Enter your Email</label>
                    <input className="bg-white w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Email"
                    type="email"

                    />
                 </div>

                 <div className="mb-4">
                    <label className="block mb-1">Enter a Password </label>
                    <input className="flex bg-white w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Password"
                    type= "password" 
                />    

                <button className="bg-blue-600 w-full py-2 hover:bg-blue-700 mt-6 rounded-lg text-white ">
                   Sign-in
                </button> 
                <div className="mt-2 justify-center flex">
                    Already have an account ?   
                    <Link to="/login" className="hover:text-blue-700 hover:underline  ml-2">Login</Link>
                    

                </div>
                
                 </div>

            </div>
        </div>
    );
}