// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onAdding = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="container">
        <div className="text-container">
          <h1 className="title">Calculate the Letters you enter</h1>
          <p>Enter the Phrase</p>
          <input
            type="search"
            onChange={this.onAdding}
            className="search"
            id="phraseText"
            value={inputPhrase}
          />
          <label className="label" htmlFor="phraseText">
            Enter the phrase
          </label>
          <p className="button">No.of letters: {inputPhrase.length}</p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
