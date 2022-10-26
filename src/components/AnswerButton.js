import React from 'react';
import { decodeHTML } from '../lib';

class AnswerButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={() => this.props.handleGuess(this.props.answer)}
        className='btn mx-2 btn-outline-primary'
      >
        {decodeHTML(this.props.answer)}
      </button>
    );
  }
}

export { AnswerButton };
