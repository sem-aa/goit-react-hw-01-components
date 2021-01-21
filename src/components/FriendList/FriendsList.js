import PropTypes from "prop-types";
import Friends from "./Friends";
import s from "./FriendsList.module.css";

export default function FriendsList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map((item) => (
        <Friends
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
