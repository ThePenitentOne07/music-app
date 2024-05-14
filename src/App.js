import "./App.css";
import { MusicPlayerProvider } from "./context/MusicPlayerContext";
import Header from "./components/Header";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Header />
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;