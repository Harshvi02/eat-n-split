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
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false); // auto close
  }
  return (
    <div className="app">
      <div className="sidebar">
       <FriendsList friends={friends} />

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
    </div>
  );
}

export default App;
function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
        />
      ))}
    </ul>
  );
}

function Friend({ name, image, balance }) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance < 0 && (
        <p className="red">You owe {name} {Math.abs(balance)}€</p>
      )}
      {balance > 0 && (
        <p className="green">{name} owes you {balance}€</p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}

      <button className="button">Select</button>
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
    image: `${image}?=${Date.now()}`,
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
