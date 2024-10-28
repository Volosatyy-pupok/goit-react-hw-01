import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import Friends from "./FriendList.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Transactions from "./Transactions.json";
const App = () => {
  return (
    <div>
      <Profile
        image={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={Friends} />
      <TransactionHistory items={Transactions} />
    </div>
  );
};
export default App;
