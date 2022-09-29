import s from "./CartPage.module.css";
import Basket from "../../components/Basket/Basket";
import Delivery from "../../components/Basket/Delivery";
import Recommendation from "../../components/Recommendation/Recommendation";

function CartPage() {
  return (
    <>
      <div className={s.cart}>
        <Basket />
        <Delivery />
      </div>
      <Recommendation />
    </>
  );
}

export default CartPage;
