import s from "./CartPage.module.css";
import Basket from "../../components/Basket/Basket";
import Delivery from "../../components/Basket/Delivery";

function CartPage() {
  return (
    <div className={s.cart}>
      <Basket />
      <Delivery />
    </div>
  );
}

export default CartPage;
