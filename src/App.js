import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import './App.css';



function App() {

  const user = {
    username: "Keith",
    avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/8ebf2a36-36dc-440d-acf7-df4ddf6c41f0-profile_image-70x70.png",
  }

  return (
    <div className="App">

      {/* IF you want components to share the same data, the parent MUST hold the data, hence the usser object  */}

      <Nav user={user}/>
      <Home user={user}/>
    </div>
  );
}

export default App;
