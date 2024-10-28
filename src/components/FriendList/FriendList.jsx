import s from "./FriendList.module.css";
import FriendListItem from "./FriendsListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendlist}>
      {friends.map((friend) => (
        <li className={s.friendItem} key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
