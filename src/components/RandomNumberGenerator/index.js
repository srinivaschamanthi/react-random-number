import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onClickGenerate = () => {
    const newNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="random-no-generator-app-container">
        <div className="random-no-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a Random Number in the Range of 0 to 100
          </p>
          <button className="generate-button" onClick={this.onClickGenerate}>
            Generate
          </button>
          <h1 className="randomNumber">{randomNumber}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
