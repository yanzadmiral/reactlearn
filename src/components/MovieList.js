import React, { useState,useEffect} from 'react'

const MovieList = () => {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies([
      { id: 1, title: "asdasd", runtime: 145 },
      { id: 2, title: "12", runtime: 145 },
      { id: 3, title: "asdasadds", runtime: 145 },
    ]);
  }, [])
  

  return (
    <div className="row">
      {movies.map((movie, index) => ( 
        <div className="col-sm-4 mb-2" key={index}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList