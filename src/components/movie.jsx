import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class Movies extends Component {
  movies = [
    { id: 1, name: "avengers", author: "babi" },
    { id: 2, name: "dark nigts rises", author: "babi" },
    { id: 3, name: "underground6", author: "babi" },
  ];
  state = {
    movies: this.movies,
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <p>
            {" "}
            {this.state.movies.length === 0
              ? "list is empty "
              : "you have " + this.state.movies.length + "movies"}
          </p>
          <div className="form-group">
            <input type="text" id="name"></input>
            <input type="text" id="author"></input>
            <button className="btn btn-success" onClick={this.add}>
              add
            </button>
          </div>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">name</th>
                <th scope="col">author</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((m) => {
                return (
                  <tr key={m.id}>
                    <td>{m.id}</td>
                    <td>{m.name}</td>
                    <td>{m.author}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.dmovie({ id: m.id });
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
  dmovie = (id) => {
    // make new array without specefic item
    const movies = this.state.movies.filter((m) => m.id !== id.id);
    this.setState((this.state.movies = movies));
  };
  add = () => {
    let a;
    if (this.state.movies) {
      a = {
        id: this.state.movies[this.state.movies.length - 1].id + 1,
        name: document.getElementById("name").value,
        author: document.getElementById("author").value,
      };
    } else {
      a = {
        id: 1,
        name: document.getElementById("name").value,
        author: document.getElementById("author").value,
      };
    }

    const movies = this.state.movies;
    movies.push(a);
    this.setState((this.state.movies = movies));
  };
}

export default Movies;
