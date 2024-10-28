import s from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <img src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span className={s.value}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={s.value}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={s.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
