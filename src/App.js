import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <button className="button">Add friend</button>
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
