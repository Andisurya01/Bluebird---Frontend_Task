/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="py-10 bg-slate-50">
            <div className="max-w-screen-xl relative mx-auto flex justify-center gap-10">
                <div className="flex justify-center gap-10">
                    <CustomLink to="/myBook" >
                        <div className="text-xl text-center text-gray-700">My Book</div>
                    </CustomLink>
                    <CustomLink to="/wishList">
                        <div className="text-xl text-center text-gray-700">Wishlist</div>
                    </CustomLink>
                </div>
                <CustomLink to="/list">
                    <div className="text-2xl left-0 absolute font-bold text-gray-700">Home</div>
                </CustomLink>
                <div className="right-0 absolute -translate-y-1">
                    <div className="flex border-gray-100 border-2 rounded-full px-4 py-2">
                        <input type="text" placeholder="Search" className="bg-[#f8fafc] focus:outline-0"></input>
                        <img src="icon/search.svg" className="" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

function CustomLink({ to, children }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <div className={isActive ? "bg-DARKBLUE03" : "bg-DARKBLUE05"}>
            <Link to={to}>
                {children}
            </Link>
        </div>
    )
}