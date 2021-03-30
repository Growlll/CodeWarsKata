// Santa wants to simplify his life and offer children the possiblity to enter their wishlist via an online form.
//
//   The form should be a React component and should contain:
//
//   an input field for the child's name (with id 'name')
//
// a text area to describe the wish (id: 'wish')
//
// a drop-down indicating the priority of the wish, from 1 to 5 - default is 1 (id: 'priority')
//
// the keys in the state to store the corresponding values should be named the same as the element's id
//
// an onSubmit action calling the function handleSubmit
//
// a function called handleSubmit, which
//
// calls send (a function that is already provided as part of the injected properties props)
// passes the current state as a parameter to send
// calls event.preventDefault
// it should be a controlled component (i.e. using onChange to bind input to the component's state)
//
// Further reading:
//
//   React Forms: https://reactjs.org/docs/forms.html
//
//   Learn about Controlled Components: https://www.codewars.com/kata/control-the-beast-controlled-components-in-reactjs

import React, { Component } from 'react';

class WishlistForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      wish: "",
      priority: 1,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const target = e.target
    const name = target.id === 'select' ? 'priority' : target.id
    this.setState({
      [name]: target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.send(this.state)
  }

  render() {
    const {name, wish, priority} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="name" value={name} onChange={this.handleChange}/>
        <textarea id="wish" value={wish} onChange={this.handleChange}/>
        <select id="priority" value={priority} onChange={this.handleChange}>
          <option value="1"/>
          <option value="2"/>
          <option value="3"/>
          <option value="4"/>
          <option value="5"/>
        </select>
        <button/>
      </form>
    )
  }
};