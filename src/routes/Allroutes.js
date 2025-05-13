import { Routes, Route } from "react-router-dom";
import { HomePage, CartPage} from "../pages";


export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
        </Routes>
    </div>
  )
}
