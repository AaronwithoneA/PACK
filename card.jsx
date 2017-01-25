import React from 'react';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicked: false
    };
  }

  // componentDidUpdate() {
  //   console.log(this.props.cards);
  //   if (this.props.cards.length === 0) {
  //     this.setState({clicked: false});
  //   }
  // }
  handleClick () {
    if (this.state.clicked === false) {
      this.setState({clicked: true});
      this.props.receiveCard(this.props.card);
      }
    if (this.state.clicked === true) {
      console.log(this.state.clicked);
      this.setState({clicked: false});
      this.props.removeCard(this.props.card);
      this.forceUpdate();
    }
  }


  render () {
    if (this.state.clicked === false) {
      return (
        <div className="card-box">
          <img className="card-image"
            src={this.props.card.image}
            onClick={this.handleClick}>
          </img>
        </div>
      );
    }
    else {
      return (
        <div className="card-box">
          <img className="card-image-clicked"
            src={this.props.card.image}
            onClick={this.handleClick}>
          </img>
        </div>
      );
    }
  }
}

export default Card;
