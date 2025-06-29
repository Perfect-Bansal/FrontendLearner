import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        "api/auth/register",
        {
          method: "POST",
          credentials: "include",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data)
        }
      );
      const result = await res.json();
      if(res.ok){
          navigate("/home");
      }else{
          alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-gray-200 shadow-2xl w-[400px] rounded-md p-10 mx-auto mt-40 flex gap-4 flex-col">
      Signup
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <input
          className="bg-white w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="username"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500"> Username is required</span>
        )}

        <input
          className="bg-white w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500"> Email is required </span>
        )}

        <input
          className="bg-white w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500"> Password is required </span>
        )}

        <button className="bg-blue-600 w-full py-2 hover:bg-blue-700 mt-6 rounded-lg text-white">
          SignUp
        </button>
        <div>
          <h1>
            {" "}
            Already have an account?
            <Link to="/login" className="hover:underline hover:text-blue-900">
              {" "}
              login{" "}
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
}
