import * as React from "react";

import { Route, Redirect } from "react-router-dom";

//Typescript
interface Props {
  title: string;
}

//Typescript
interface State {
  email: string;
  password: string;
  user: object;
  userIsDefined: boolean;
}

class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: "email@test.com",
      password: "derpderp",
      user: {},
      userIsDefined: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // window.localStorage.clear();
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(data => {
      data.json().then(results => {
        this.setState({
          user: results[0],
          userIsDefined: true
        });

        window.localStorage.setItem("user", results[0]);
      });
    });
  }

  render() {
    if (this.state.userIsDefined) {
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      );
    }

    return (
      <React.Fragment>
        <h1>Je suis un titre</h1>
        <form onSubmit={this.handleSubmit}>
          <label>email :</label>
          <input name="email" />
          <label>Password :</label>
          <input name="password" />
          <button>Se connecter</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;