import axios from "axios";
import { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero"
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TopRatedMovies from "./Components/TopRatedMovies";
import { Container } from "react-bootstrap";


function App() {
  // useEffect(() => {

  //   axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=06eab33cd5f147c733290f1947a2f9c0").then(res => {
  //     console.log(res)
  //   })
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <div>
      <Header />
      {/* <Hero /> */}
      <Container>
      <TopRatedMovies />

      </Container>
    </div>
  );
}

export default App;
