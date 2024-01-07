import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCars } from "../api/api"
import { addBook } from "./../store/myBook"
export default function VehicelPages() {
    const redux = useSelector((state) => state.cars)
    console.log(redux);
    const [car, setCar] = useState([])
    const dispatch = useDispatch()

    const handleAddBook = () => {
        dispatch(addBook({
            description : car.description,
            imageURL : car.imageURL,
            price : car.price,
            vehicle :   car.vehicle
        }));
    };
    useEffect(() => {
        getCars()
            .then((res) => {
                const response = res.data.type.find((data) => data.id === redux.id)
                const filter = response.car_type.find((data) => data.vehicle === redux.vehicle)
                setCar(filter)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [redux.id, redux.vehicle])

    console.log(car)
    const copyUrl = () => {
        navigator.clipboard.writeText(window.location.href)
    };


    return (
        <section className="flex justify-center gap-5 max-w-screen-xl mx-auto">
            <div className="bg-white p-4 rounded-xl aspect-w-1 aspect-h-1 relative">
                <div className="absolute flex gap-2 bg-white px-4 py-2 rounded-br-xl">
                    <button onClick={handleAddBook} className="flex items-center">Like<img className="" src="icon/like.svg" /></button>
                    <button onClick={copyUrl} className="flex items-center">Share<img src="icon/share.svg" /></button>
                </div>
                <img className="object-cover rounded-xl w-full h-[500px] bg-gray-100" src={car.imageURL} alt={car.vehicle} />
            </div>
            <div className="bg-white p-4 rounded-xl flex flex-col">
                <div className="flex-grow">
                    <h1 className="font-bold text-xl pb-2">Description</h1>
                    <p className="">{car.description}</p>
                </div>
                <hr className="pb-4" />
                <div className="grid grid-cols-2 justify-around items-center gap-4">
                    <p className="py-2 px-4 text-center">{car.price}</p>
                    <p className="bg-blue-500 text-center py-2 px-4 rounded-full font-medium text-white">Book</p>
                </div>
            </div>
        </section>
    )
}