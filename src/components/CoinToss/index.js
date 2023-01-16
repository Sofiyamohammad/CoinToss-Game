import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }

    this.setState(prevState => ({
      total: prevState.total + 1,
    }))
  }

  render() {
    const {heads, tails, total, imageUrl} = this.state

    return (
      <div className="coin-toss-container">
        <div className="card-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img alt="toss result" className="coin-image" src={imageUrl} />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
