// import logo from './logo.svg';
import "./App.css";
import Row from "./Row.js";
import Banner from "./Banner";
import requests from "./requests";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAcionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
