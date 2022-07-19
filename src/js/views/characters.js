import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";



export const Characters = () => {
  const { store, actions } = useContext(Context);

  const [people, setPeople] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);

    }
    fetchPeople();
  }, [])
  console.log('data', people);

  return (
    <>

      <section className="py-5">
        <div className="container px-5">
          <h1 className="fw-bolder fs-5 mb-4">Company Blog</h1>
          <div className="card border-0 shadow rounded-3 overflow-hidden">
            <div className="card-body p-0">
              <div className="row gx-0">
                <div className="col-lg-6 col-xl-5 py-lg-5">
                  <div className="p-4 p-md-5">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      { }
                    </div>
                    <div className="h2 fw-bolder">Article heading goes here</div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique delectus ab doloremque, qui doloribus ea officiis...
                    </p>
                    <a className="stretched-link text-decoration-none" href="#!">
                      Read more
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-7">
                  <div
                    className="bg-featured-blog"
                    style={{
                      backgroundImage:
                        'url("https://dummyimage.com/700x350/343a40/6c757d")'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
          <h2 className="fw-bolder fs-5 mb-4">Star Wars Characters</h2>
          <div className="row gx-5">
            {people.map(({ name, birth_year, gender, height, mass }, index) => {
              return (

                <div className="col-lg-4 mb-5">
                  <div className="card h-100 shadow border-0">
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/600x350/ced4da/6c757d"
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <h5 className=" card-title mb-3">{name}</h5>

                      <p className="card-text mb-0">
                        <p>Height: {height} </p>
                        <p>Mass: {mass} </p>
                        <p>Birth: {birth_year} </p>
                      </p>
                    </div>
                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                      <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">

                          <Link className="btn btn-primary" to={`/charactersDetails/${index}`} >Learn more</Link>



                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })}

          </div>
        </div>
      </section>
    </>

  );
};

