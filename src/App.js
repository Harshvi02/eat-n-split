import "./index.css";


  import { useState } from "react";
function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <AddFriend />}

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
function FriendsList() {
  return (
    <ul>
      <Friend
        name="Clark"
        image="https://i.pravatar.cc/48?u=118836"
        status="You owe Clark 7€"
        className="red"
      />
      <Friend
        name="Sarah"
        image="https://i.pravatar.cc/48?u=118837"
        status="Sarah owes you 20€"
        className="green"
      />
      <Friend
        name="Anthony"
        image="https://i.pravatar.cc/48?u=118838"
        status="You and Anthony are even"
        className=""
      />
    </ul>
  );
}
function Friend({ name, image, status, className }) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className={className}>{status}</p>
      <button className="button">Select</button>
    </li>
  );
}
function AddFriend() {
  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input type="text" />

      <label>🌄 Image URL</label>
      <input type="text" />

      <button className="button">Add</button>
    </form>
  );
}
