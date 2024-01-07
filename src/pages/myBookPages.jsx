import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { removeBook } from "./../store/myBook"
import { formatCurrency } from "../util/rupiah"

export default function MyBookPages() {
    const bookList = useSelector((state) => state.book.bookList);
    console.log(bookList);
    const dispatch = useDispatch();
    const handleRemoveBook = (vehicle) => {
        dispatch(removeBook({ vehicle }));
    };

    const extractNumericValue = (str) => parseInt(str.replace("IDR", "").replace(/\D/g, ""), 10);
    const total = bookList.reduce((acc, car) => acc + extractNumericValue(car.price), 0);
    const totalValue = formatCurrency(total).replace("Rp", "IDR")

    return (
        <section className="mx-auto max-w-screen-xl py-10">
            <h1 className="font-bold text-4xl text-gray-700 pt-10 pb-20">MyBookPages</h1>
            <div className="flex-col">
                {bookList.length === 0 ? (
                    <div className="flex items-center justify-center p-20">
                        <img className="h-60" src="icon/sad.svg" alt="sad.svg" />
                        <h1 className="font-bold text-2xl text-gray-400">BELUM ADA APA-APA</h1>
                    </div>
                ) : (bookList?.map((book) => {
                    return (
                        <div key={book.vehicle} className="flex justify-center py-5 gap-5 max-w-screen-xl mx-auto">
                            <div className="bg-white p-4 rounded-xl aspect-w-1 aspect-h-1 relative">
                                <div className="absolute flex gap-2 bg-white px-4 py-2 rounded-br-xl">
                                    <button onClick={() => handleRemoveBook(book.vehicle)} className="flex items-center">Remove<img className="pl-2" src="icon/trash.svg" /></button>
                                </div>
                                <img className="object-cover rounded-xl w-full h-[300px] bg-gray-100" src={book.imageURL} alt={book.vehicle} />
                            </div>
                            <div className="bg-white rounded-xl p-4 flex-col">
                                <p className="text-2xl font-semibold text-center text-gray-700">{book.vehicle}</p>
                                <hr />
                                <p className="text-base text-center">{book.price}</p>
                            </div>
                        </div>
                    )
                }))}
            </div>
            {bookList.length === 0 ? null : (
                <div className="absolute bottom-0 right-0 mb-10 px-4 py-2 bg-white rounded-xl">
                    <label className="">Total : </label>
                    <p className="px-4 text-xl">{totalValue}</p>
                </div>
            )}
        </section>
    )
}