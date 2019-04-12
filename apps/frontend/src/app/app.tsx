import * as React from 'react';
import { Component } from 'react';
import { environment as env } from "@env";


import './app.css';
import { environment } from '../environments/environment.prod';

export class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: 'Be awesome'
      // },
      // {
      //   id: 2,
      //   title: 'Learn Nx'
      // }
    ]
  };

  addTodo = () => {
    this.setState({
      todos: this.state.todos.concat({ id: Date.now(), title: 'New todo' })
    });
  };

  componentDidMount() {
    console.log(environment)
    fetch('/api/todos').then(response => response.json()).then(
      todos => this.setState({ todos })
    )
  }

  render() {
    const title = 'frontend';
    return (
      <div>
        <h1>Welcome to {title}!</h1>
        <button id="add-todo" onClick={this.addTodo}>
          Add
        </button>
        <ul>
          {this.state.todos.map(todo => (
            <li className="todo" key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
