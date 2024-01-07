import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { removeBook } from "./../store/myBook"
export default function MyBookPages() {
    const bookList = useSelector((state) => state.book.bookList);
    console.log(bookList);
    const dispatch = useDispatch();
    const handleRemoveBook = (vehicle) => {
        dispatch(removeBook({ vehicle }));
    };

    return (
        <section className="">
            <h1>MyBookPages</h1>
            <div className="">
                {bookList?.map((book) => {
                    return (
                        <div key={book.vehicle} className="flex justify-center gap-5 max-w-screen-xl mx-auto">
                            <div className="bg-white p-4 rounded-xl aspect-w-1 aspect-h-1 relative">
                                <div className="absolute flex gap-2 bg-white px-4 py-2 rounded-br-xl">
                                    <button onClick={() => handleRemoveBook(book.vehicle)} className="flex items-center">Remove<img className="" src="icon/like.svg" /></button>
                                </div>
                                <img className="object-cover rounded-xl w-full h-[500px] bg-gray-100" src={book.imageURL} alt={book.vehicle} />
                            </div>
                            <div>
                                <p>{book.description}</p>
                                <p>{book.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}