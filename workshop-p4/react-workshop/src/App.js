import "./App.css";
import MainVideo from "./components/main-video/main-video";
import SuggestionVideos from "./components/suggestion-videos/suggestion-videos";
import Comments from "./components/comments/comments";

function App() {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <MainVideo />
        <SuggestionVideos />
      </div>
      <div className='row'>
        <Comments />
      </div>
    </div>
  );
}

export default App;
