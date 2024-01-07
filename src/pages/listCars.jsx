import { useEffect, useState } from "react";
import { getCars } from "../../src/api/api";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { updateId } from "../store/cars";

export default function ListRandomCars() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getCars().then((res) => {
            setData(res.data.type);
        });
    }, [])

    const getRandomCarType = (i) => {
        const category = data.find((cat) => cat.id === i);

        if (category) {
            const randomIndex = Math.floor(Math.random() * category.car_type.length);
            return category.car_type[randomIndex];
        }

        return null;
    };

    const handleClick = (id, vehicle) => {
        console.log("id", id, vehicle);
        dispatch(updateId({ id: id, vehicle }));
        navigate("/vehicel")
    }
    

    return (
        <>
            <div className="max-w-screen-xl mx-auto py-10">
                <h1 className="font-bold text-4xl text-gray-700 pt-10 pb-20">List Cars</h1>
                <div className="flex justify-center gap-5">
                    {data?.map((data) => {
                        const response = getRandomCarType(data.id);
                        return (
                            <div className="bg-white p-4 rounded-3xl" key={data.id}
                                onClick={() => handleClick(data.id, response.vehicle)}>
                                <img className="bg-gray-100 rounded-2xl" src={response.imageURL} alt={response.name} />
                                <h1 className="font-bold pt-4 text-gray-700 text-center">{response.vehicle}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}