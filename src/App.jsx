import user from "./components/Profile/user.json";
import Profile from "./components/Profile/Profile";

import statisticalData from "./components/Statistics/statical-data.json";
import Statistics from "./components/Statistics/Statistics"

import friends from "./components/FriendList/Friends.json"
import FriendsList from "./components/FriendList/FriendsList"

import transaction from "./components/TransactionHistory/transaction.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics items={statisticalData} />
      <FriendsList items={friends} />
      <TransactionHistory items={transaction}/>
  </div>
  )
}
