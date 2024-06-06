import { useEffect, useState } from "react";
import AvailableCampDetail from './AvailableCampDetail'


const AvailableCamp = () => {
    const [available, setAvailable] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/camp')
            .then(res => res.json())
            .then(data => setAvailable(data))
    }, [])

    return (
        <div>
            <div className="mt-5">
                <h1 className="text-center font-montserrat text-3xl font-bold">Our available medical camps</h1>
                <section className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 z-40">
                        {
                            available.map(avl=><AvailableCampDetail key={avl._id} avl={avl}></AvailableCampDetail>)
                        }
                    </div>
                </section>


            </div>
        </div>
    );
};

export default AvailableCamp;