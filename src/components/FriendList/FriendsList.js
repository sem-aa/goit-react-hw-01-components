import PropTypes from "prop-types";
import s from "./FriendsList.module.css";

export default function FriendsList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map((item) => (
        <li className={s.item} key={item.id}>
          <span className={item.isOnline ? s.status : s.statusOff}>
            {item.isOnline}
          </span>
          <img
            className={s.avatar}
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};