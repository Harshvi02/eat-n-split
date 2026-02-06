import "./index.css";


  import { useState } from "react";
function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 118837,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=118837",
      balance: 20,
    },
    {
      id: 118838,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=118838",
      balance: 0,
    },
  ]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false); // auto close
  }
  function handleSplitBill(value) {
  setFriends((friends) =>
    friends.map((friend) =>
      friend.id === selectedFriend.id
        ? { ...friend, balance: friend.balance + value }
        : friend
    )
  );

  setSelectedFriend(null); // form close
}
  return (
    <div className="app">
      <div className="sidebar">
       <FriendsList
  friends={friends}
  onSelectFriend={setSelectedFriend}
/>


{showAddFriend && (
  <AddFriend onAddFriend={handleAddFriend} />
)}

       <button
  className="button"
  onClick={() => setShowAddFriend((show) => !show)}
>
  {showAddFriend ? "Close" : "Add friend"}
</button>


      </div>
      {selectedFriend && (
  <SplitBill
    friend={selectedFriend}
    onSplitBill={handleSplitBill}
  />
)}

    </div>
  );
}

export default App;
function FriendsList({ friends, onSelectFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelectFriend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      {friend.balance === 0 && (
        <p>You and {friend.name} are even</p>
      )}

      <button
        className="button"
        onClick={() => onSelectFriend(friend)}
      >
        Select
      </button>
    </li>
  );
}

  

 function AddFriend({ onAddFriend }) {
const [name, setName] = useState("");
const [image, setImage] = useState("https://i.pravatar.cc/48");
function handleSubmit(e) {
  e.preventDefault();

  if (!name || !image) return;

  const newFriend = {
    id: Date.now(),
    name,
    image: `${image}?u=${Date.now()}`,
    balance: 0,
  };

  onAddFriend(newFriend);

  setName("");
  setImage("https://i.pravatar.cc/48");
}

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>

      <label>👫 Friend name</label>
      <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

      <label>🌄 Image URL</label>
      <input
  type="text"
  value={image}
  onChange={(e) => setImage(e.target.value)}
/>

      <button className="button">Add</button>
    </form>
  );
}

  function SplitBill({ friend, onSplitBill }) {

  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("you");

  const friendExpense = bill ? bill - yourExpense : "";
function handleSubmit(e) {
  e.preventDefault();

  if (!bill || !yourExpense) return;

  const value =
    whoIsPaying === "you"
      ? yourExpense
      : -friendExpense;

  onSplitBill(value);
}

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>

      <h2>SPLIT A BILL WITH {friend.name.toUpperCase()}</h2>

      <label>💰 Bill value</label>
      <input
  type="number"
  value={bill}
  onChange={(e) => setBill(Number(e.target.value))}
/>

      <label>🧍‍♀️ Your expense</label>
      <input
  type="number"
  value={yourExpense}
  onChange={(e) =>
    setYourExpense(
      Number(e.target.value) > bill
        ? yourExpense
        : Number(e.target.value)
    )
  }
/>


      <label>👫 {friend.name}'s expense</label>
      <input type="number" disabled value={friendExpense} />


      <label>💸 Who is paying the bill</label>
      <select
  value={whoIsPaying}
  onChange={(e) => setWhoIsPaying(e.target.value)}
>
  <option value="you">You</option>
  <option value="friend">{friend.name}</option>
</select>

      <button className="button">Split bill</button>
    </form>
  );
}
