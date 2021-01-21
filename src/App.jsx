import user from "./data/user.json";
import Profile from "./components/Profile/Profile";

import statisticalData from "./data/statical-data.json";
import Statistics from "./components/Statistics/Statistics"

import friends from "./data/friends.json"
import FriendsList from "./components/FriendList/FriendsList"

import transaction from "./data/transaction.json"
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
      <Statistics title="Upload stats" items={statisticalData} />
      <FriendsList items={friends} />
      <TransactionHistory items={transaction}/>
  </div>
  )
}
