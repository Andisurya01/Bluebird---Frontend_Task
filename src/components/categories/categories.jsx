import { useEffect, useState } from "react"
import { getCategoires } from "../../api/api"

export default function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategoires().then(res => {
            setCategories(res)
        })
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto pt-20">
            <h1 className="text-3xl text-center font-semibold text-gray-700 pb-10">Category</h1>
            <div className="flex justify-center gap-5 p-5">
                {categories?.map(categories => {
                    return (
                        <div className="bg-white p-4 rounded-3xl" key={categories.id}>
                            <h1 className="font-bold pb-2 text-gray-700">{categories.name}</h1>
                            <img className="bg-gray-100 rounded-2xl" src={categories.imageURL} alt={categories.name} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}