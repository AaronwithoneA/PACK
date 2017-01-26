import React from 'react';
import Card from './card';
import Modal from 'react-modal';
import InstructionsModal from './modal';

class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      status: "game",
      cardList: [{
        size: "small",
        position: "standing",
        color: "mixed",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485286886/Small_standing_mixed_lmcfzp.jpg"
      },
      {
        size: "small",
        position: "laying",
        color: "mixed",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485290904/small_laying_mixed_gonvr8.jpg"
      },
      {
        size: "large",
        position: "laying",
        color: "mixed",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485286005/large_laying_mixed_tbgpuo.jpg"
      },
      {
        size: "medium",
        position: "laying",
        color: "mixed",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485288630/medium_laying_mixed_vyjhcz.jpg"
      },
      {
        size: "medium",
        position: "sitting",
        color: "mixed",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485290695/medium_sitting_mixed_gngkqg.jpg"
      },
      {
        size: "medium",
        position: "sitting",
        color: "light",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485288085/medium_sitting_light_tdthn1.jpg"
      },
      {
        size: "large",
        position: "standing",
        color: "dark",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485286635/large_standing_dark_xiiswa.jpg"
      },
      {
        size: "small",
        position: "laying",
        color: "dark",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485286829/small_laying_dark_mmm1fr.jpg"
      },
      {
        size: "small",
        position: "laying",
        color: "light",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485287238/small_laying_light_widmmp.jpg"
      },
      {
        size: "medium",
        position: "standing",
        color: "mixed",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485287971/medum_standing_mixed_vmrode.jpg"
      },
      {
        size: "small",
        position: "laying",
        color: "mixed",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485287263/small_laying_mixed_splcjj.jpg"
      },
      {
        size: "medium",
        position: "sitting",
        color: "mixed",
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485288262/medium_sitting_mixed_wklepv.png"
      },
      ]
    };
  }

  checkMatch() {
    if (this.props.cards.length > 2) {
      const cards = this.props.cards;
      if ((cards[0].size === cards[1].size && cards[1].size === cards[2].size) ||
        (cards[0].size !== cards[1].size && cards[1].size !== cards[2].size)) {
          if ((cards[0].color === cards[1].color) && (cards[1].color === cards[2].color) ||
            (cards[0].color !== cards[1].color) && (cards[1].color !== cards[2].color)) {
              if ((cards[0].position === cards[1].position) && (cards[1].position === cards[2].position) ||
                (cards[0].position !== cards[1].position) && (cards[1].position !== cards[2].position)) {
                  return true;
              } else {
                return false;
              }
          }else {
            return false;
          }
      }else {
          return false;
      }
    }
    return "<";
  }

  validPack () {
    this.props.increasePackCount();
    setTimeout(() => {
      console.log(this.props.setNumber);
      if (this.props.setNumber === 4) {
        this.props.clearCount();
        this.gameOver();
        this.forceUpdate();
      }
    }, 1500);
  }

  componentDidUpdate () {
    if (this.checkMatch() === "<") {
      return;
    }
    else if (this.checkMatch()) {
      this.props.resetCards();
      this.validPack();
    }
    else {
      this.props.resetCards();
    }
  }

  gameOver () {
    this.setState({status: "game over"});
    setTimeout(() => this.setState({status: "game"}), 10000);
  }

  render () {
    return(
      <div>
        <div className='header-container'>
          <div className='title-box'>
            <div className='title'>PACK</div>
          </div>
          <div className='nav'>
            <div className="pack-number-container">
              <div className='pack-number'>{this.props.setNumber} / 4 Packs</div>
            </div>
            <div><InstructionsModal className='modal'/></div>
          </div>
        </div>

        <div className="cards-container">
          {this.state.cardList.map((card, i) => (
            <Card card={card}
              key={i}
              receiveCard={this.props.receiveCard}
              removeCard={this.props.removeCard}
              setNumber={this.props.setNumber}
              cards={this.props.cards}
              status={this.state.status}/>))}
        </div>
      </div>
    );
  }
}

export default Board;
