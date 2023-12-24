import "./css/App.css";
import "./css/mainStyle.css";

import Gallery from "./componets/Gallery";
import Hero from "./componets/Hero";
import Navigation from "./componets/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Hero></Hero>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
