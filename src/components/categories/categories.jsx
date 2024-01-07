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
        <div>
            <div className="flex justify-center gap-5 p-5">
                {categories?.map(categories => {
                    return (
                        <div className="bg-white p-4 rounded-3xl" key={categories.id}>
                            <h1 className="font-bold pb-2">{categories.name}</h1>
                            <img className="bg-gray-100 rounded-2xl" src={categories.imageURL} alt={categories.name} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}