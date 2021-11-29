import './App.css';
import albumsArr from './Data/Data'
import AlbumCollection from './components/AlbumCollection';

function App() {
  return (
    <div className="App">
      <h1>Welcome to JEM Albums</h1>
      <AlbumCollection albums={albumsArr} /> 
    </div>
  );
}

export default App;
