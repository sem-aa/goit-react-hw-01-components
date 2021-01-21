import PropTypes from "prop-types";
import s from "./FriendsList.module.css";

export default function Friends({ id, isOnline, avatar, name }) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.status : s.statusOff}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friends.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
