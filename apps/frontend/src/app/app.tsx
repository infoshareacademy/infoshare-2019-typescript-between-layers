import * as React from 'react';
import { Component } from 'react';
import { Todo } from '@trails/typings';

import './app.css';
import { environment } from '../environments/environment';

interface State {
  todos: Todo[]
}

export class App extends Component<{}, State> {
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
