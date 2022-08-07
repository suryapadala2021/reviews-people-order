import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  dec = () => {
    const {index} = this.state
    const i = index - 1
    if (i < 0) {
      this.setState({index: 0})
    } else {
      this.setState({index: i})
    }
  }

  inc = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    const i = index + 1
    if (i >= reviewsList.length) {
      this.setState({index: reviewsList.length - 1})
    } else {
      this.setState({index: i})
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    return (
      <div className="container">
        <div className="box">
          <h1 className="main-heading">Reviews</h1>
          <div className="review-box">
            <button
              testid="leftArrow"
              type="button"
              className="btn"
              onClick={this.dec}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="rev">
              <img
                className="image"
                src={reviewsList[index].imgUrl}
                alt={reviewsList[index].username}
              />
              <p className="name">{reviewsList[index].username}</p>
            </div>
            <button
              testid="rightArrow"
              type="button"
              className="btn"
              onClick={this.inc}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{reviewsList[index].companyName}</p>
          <p className="company-name">{reviewsList[index].description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
