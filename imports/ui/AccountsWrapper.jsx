import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsWrapper extends Component {
  componentDidMount() {
    // wrapping inside the blaze template
    // the login buttons
    this.view = Blaze.render(Template.loginButtons,
    ReactDOM.findDOMNode(this.refs.container));
  }

  // remove blame after component mounts
  // since we longer need it
  componentWillumount() {
    Blaze.remove(this.view);
  }

  // render the login butons to the span
  render() {
    return <span ref="container" />
  }
}
