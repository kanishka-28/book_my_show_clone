import './App.css';
//HOC
// import navBar from './components/Navbar/Navbar.component'
import DefaultHOC from './HOC/Default.HOC';
//Copmonent

import Movie from '../src/pages/Movie.page';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/Home.page';
import MovieHOC from './HOC/Movie.HOC';
import Plays from './pages/plays.page';

// import axios from 'axios';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params={};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage}/>
    <MovieHOC path='/movie/:id' exact component={Movie} />
    <DefaultHOC path='/plays' exact component={Plays}/>
    </>
  );
}

export default App;
