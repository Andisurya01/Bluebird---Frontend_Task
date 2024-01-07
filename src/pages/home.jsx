import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Categories from "../components/categories/categories";

export default function Home() {
    return (
        <section>
            <Navbar></Navbar>
            <Categories></Categories>
            
            <main>
                <Outlet></Outlet>
            </main>
        </section>
    )
}