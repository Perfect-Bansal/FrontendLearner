import { useEffect, useState } from "react";

export function Home( {timeZone, locationName}) {
    const [time, setTime] = useState("");
    
    

    useEffect(() => {
        const interval = setInterval(() => {
            const nowTime = new Date().toLocaleTimeString("en-US", {
                timeZone: timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
            setTime(nowTime);
        }, 1000);
         return () => clearInterval(interval);
        },[timeZone]);
        
   
   return (
  <div className="bg-gray-200 border border-blue-200 rounded-2xl shadow-lg w-[320px] p-6 mx-auto mt-20">

    <h1 className="font-semibold text-2xl text-center">{locationName || "Nepal, Kathmandu"}</h1>

    <p className="text-center text-4xl  text-gray-900 mb-5 mt-5">{time}</p>
    <p className="text-center text-sm text-gray-500"><span className="font-semibold">{timeZone || "Asia,Kathmandu"}</span></p>

  </div>
);

}