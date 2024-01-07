/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-center gap-10 py-10 bg-slate-50">
            <CustomLink to="/list">
                <div className="">Home</div>
            </CustomLink>
            <CustomLink to="/myBook" >
                <div className="">My Book</div>
            </CustomLink>
            <CustomLink to="/wishList">
                <div className="">Wishlist</div>
            </CustomLink>
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