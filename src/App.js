import "./App.css";

export default function App() {
  const users = [
    {
      name: "Sangeetha",
      pic: "https://helostatus.com/wp-content/uploads/2021/09/lovely-cute-girl-pic.jpg",
    },
    {
      name: "Suba",
      pic: "https://helostatus.com/wp-content/uploads/2021/08/best-profile-pictures-2021.jpg",
    },
  ];
  return (
    <div className="App">
      {users.map((el) => (
        <Msg name={el.name} pic={el.pic} />
      ))}
    </div>
  );
}

function Msg({ name, pic }) {
  return (
    <div>
      <img className="profile-pic" src={pic} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}
