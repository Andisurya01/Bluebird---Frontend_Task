import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Categories from "../components/categories/categories";
import Footer from "../components/footer/footer";

export default function Home() {
    return (
        <section>
            <Navbar></Navbar>
            <Categories></Categories>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </section>
    )
}