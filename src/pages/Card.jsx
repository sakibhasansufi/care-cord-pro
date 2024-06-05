import { useEffect, useState } from "react";
import CardDetail from "./CardDetail";


const Card = () => {
    const [medCamp,setMedCamp]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/camp')
        .then(res=> res.json())
        .then(data=> setMedCamp(data))
    },[])
    return (
        <div className="mt-5">
            <h1 className="text-center font-montserrat text-3xl font-bold">Our popular medical camps</h1>
            <section className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 z-40">
                {
                    medCamp.map(camp=><CardDetail key={camp._id} camp={camp}></CardDetail>)
                }
            </div>
            </section>
           

        </div>
    );
};

export default Card;