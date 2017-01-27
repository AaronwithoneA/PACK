import React from 'react';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicked: false
    };
  }

  componentWillUpdate() {
    if (this.props.cards.length > 2) {
      setTimeout(() => {
        this.setState({clicked: false});
      }, 1500);
    }
  }

  handleClick () {
    if (this.state.clicked === false) {
      this.setState({clicked: true});
      this.props.receiveCard(this.props.card);
      }
    if (this.state.clicked === true) {
      this.setState({clicked: false});
      this.props.removeCard(this.props.card);
      this.forceUpdate();
    }
  }


  render () {
    if (this.props.status === "game over") {
      return (
        <div className="card-box">
          <img className="card-image-game-over"
            src={this.props.card.image}
            onClick={this.handleClick}>
          </img>
        </div>
      );
    }
    else if (this.state.clicked === false) {
      return (
        <div onClick={this.handleClick} className="card-box">
          <img className="card-image"
            src={this.props.card.image}>
          </img>
          <div className="clicked-attributes">
            {this.props.card.size}
            <br/>
            {this.props.card.position}
            <br/>
            {this.props.card.color}
          </div>
        </div>
      );
    }
    else if (this.props.match === "yes") {
      return (
        <div className="card-box">
          <img className="card-image-match"
            src={this.props.card.image}>
          </img>
        </div>
      );
    }
    else if (this.props.match === "no") {
      return (
        <div className="card-box">
          <img className="card-image-no-match"
            src={this.props.card.image}>
          </img>
        </div>
      );
    }
    else {
      return (
        <div onClick={this.handleClick}className="card-box">
          <img className="card-image-clicked"
            src={this.props.card.image}>
          </img>
        </div>
      );
    }
  }
}

export default Card;
