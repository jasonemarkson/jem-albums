import './App.css';
import albumsArr from './Data/Data'
import AlbumCollection from './components/AlbumCollection';
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <Container>
      <div className="App">
        <h1>Welcome to JEM Albums</h1>
        <AlbumCollection albums={albumsArr} /> 
      </div>
    </Container>
  );
}

export default App;
