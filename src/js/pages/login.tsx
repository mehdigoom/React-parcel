import * as React from "react";

//Typescript
interface Props {
  title: string;
}

//Typescript
interface State {
  email: string;
  password: string;
}

class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: "email@test.com",
      password: "derpderp"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    fetch("http://localhost:4000/public/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(data => {
      data.json().then(results => {
          console.log(results);
      })
    });
  }

  render() {
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