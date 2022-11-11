import s from "./ProfileHistory.module.css";
import OrderCard from "../OrderCard/OrderCard";
import { ordersData } from "../../database/localeData";

function ProfileHistory() {
  return (
    <div className={s.history}>
      <p className={s.warning}>
        Если не понравился вкус или качество продукта — поможем по всем
        вопросам. Поддержка 8 800 999 99 99
      </p>
      {ordersData.length !== 0 ? (
        <div className={s.orders}>
          {ordersData.map((order) => (
            <OrderCard order={order} key={order.orderId} />
          ))}
        </div>
      ) : (
        <p>История отсутсвует</p>
      )}
    </div>
  );
}

export default ProfileHistory;
