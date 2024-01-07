import {
    Route,
    createRoutesFromElements,
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home"
import MyBookPages from "../pages/myBookPages"
import WishListPages from "../pages/wishListPages"
import VehicelPages from "../pages/vehicelPages"
import ListRandomCars from "../pages/listCars";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/"  element={<Home />} >
                <Route path="/myBook"  element={<MyBookPages />} />
                <Route path="/wishList"  element={<WishListPages />} />
                <Route path="/vehicel"  element={<VehicelPages />} />
                <Route path="/list" element={<ListRandomCars/>} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
        </Route>
    )
)

export default router