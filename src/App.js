import "./styles.css";

export default function App() {
  const names = ["bina", "james", "latha", "hema", "amutha"];
  return (
    <div className="App">
      <h1>Hello welcome array method</h1>
      {names.map((nm) => (
        <Msg name={nm} />
      ))}
    </div>
  );
}

function Msg({ name }) {
  //const name = "arvid";
  return (
    <div className="welcome">
      <h1> hi {name}🕊️💕</h1>
    </div>
  );
}
