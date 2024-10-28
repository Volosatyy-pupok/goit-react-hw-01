import Profile from "./Profile/Profile";
import userData from "./userData.json";
import Friends from "./FriendList.json";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
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
