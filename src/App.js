import React from "react";
import Header from "./components/Header";
import Info from "./components/Info";

const API_KEY = "3DQC9PR-NXV4044-PD2DYJH-DG4T3Z7"


class App extends React.Component{
  state = {
    films: [],
    topFilms: [],
    showTop: false
  };
  gettingFilms = async (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    try {
      const api_url = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${query}`, {
        headers: {
          'X-API-KEY': API_KEY,
          'accept': 'application/json'
        },
      });
      if (!api_url.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await api_url.json();
      console.log(data);
      if (data && data.docs && data.docs.length > 0) {
        this.setState({
          films: data.docs,
          showTop: false
        });
      ;
      } else {
      }
      
    } catch (error) {
      console.error('Error fetching or processing data:', error);
   
    }
  }

  render(){
    return( 
      <div>
        <h1>КиноНайди</h1>
        <Header films = {this.gettingFilms}/>
        <div className="films-list">
          {this.state.showTop
            ? this.state.topFilms.map((film, index) => (
                <Info
                  key={index}
                  name={film.name}
                  ageRating={film.ageRating}
                  url={film.backdrop?.url}
                  description={film.description}
                  posterUrl={film.poster?.url}
                />
              ))
            : this.state.films.length > 0
            ? this.state.films.map((film, index) => (
              <Info
              key={index}
              name={film.name}
              ageRating={film.ageRating}
              url={film.backdrop?.url}
              description={film.description}
              posterUrl={film.poster?.url}
            />
          ))
        : null}
    </div>
      </div>
    )
  }
}

export default App