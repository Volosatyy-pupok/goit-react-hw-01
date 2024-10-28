import s from "./TransactionHistory.module.css"; // Імпортуємо файли стилів

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      {" "}
      {/* Додавання класу з файлу стилів */}
      <thead>
        <tr>
          <th className={s.tableHead}>Type</th>{" "}
          {/* Додавання класу для заголовку */}
          <th className={s.tableHead}>Amount</th>
          <th className={s.tableHead}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
