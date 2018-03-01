import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  state = {
    users: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({
        users
      }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="">Users</h1>
        <ul className="">
          {this.state.users.map(user =>
            <li className="" key={user.id}>{user.username}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;