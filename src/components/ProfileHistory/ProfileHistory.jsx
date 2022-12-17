import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./ProfileHistory.module.css";
import OrderCard from "../OrderCard/OrderCard";
import { fetchOrders } from "../../redux/userSlice";

function ProfileHistory() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className={s.history}>
      <p className={s.warning}>
        Если не понравился вкус или качество продукта — поможем по всем
        вопросам. Поддержка 8 800 999 99 99
      </p>
      {orders.length !== 0 ? (
        <div className={s.orders}>
          {orders.map((order) => (
            <OrderCard order={order} key={order} />
          ))}
        </div>
      ) : (
        <p>История отсутсвует</p>
      )}
    </div>
  );
}

export default ProfileHistory;
