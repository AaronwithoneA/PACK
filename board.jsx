import React from 'react';
import Card from './card';
import Modal from 'react-modal';
import InstructionsModal from './modal';

class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      status: "game",
      match: "",
      packs: [],
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
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485547386/small-laying-mixed2_ndwatt.jpg"
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
        image: "http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485547705/large_standing_dark_3_airdge.jpg"
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
    this.setState({cardsList: this.state.cardList.sort(
      () => .5 - Math.random())});
  }

  checkMatch() {
    if (this.props.cards.length > 2) {
      const cards = this.props.cards;
      if (this.compareAttribute(cards, "size")) {
        if (this.compareAttribute(cards, "color")) {
          if (this.compareAttribute(cards, "position") && this.checkDuplicate() ) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    return "<";
  }

  compareAttribute (cards, attribute) {
    return (
      (cards[0][attribute] === cards[1][attribute]
      && cards[1][attribute] === cards[2][attribute]) ||
      (cards[0][attribute] !== cards[1][attribute]
        && cards[1][attribute] !== cards[2][attribute]
          && cards[0][attribute] !== cards[2][attribute])
    );
  }

  checkDuplicate () {
    let newPack = true;
    this.state.packs.forEach((pack) => {
      let duplicateCards = 0;
      pack.forEach((dog) => {
        if (this.props.cards.indexOf(dog) !== -1) {
          duplicateCards += 1;
        }
      });
      if (duplicateCards > 2) {
        newPack = false;
      }
    });
    return newPack;
  }

  addPack () {
    this.props.increasePackCount();
    setTimeout(() => {
      if (this.props.setNumber === 4) {
        this.gameOver();
      }
    }, 1500);
  }

  componentDidUpdate () {
    if (this.checkMatch() === "<") {
      return;
    }
    else if (this.checkMatch()) {
      this.state.packs.push(this.props.cards);
      this.setState({match: "yes"});
      setTimeout(() => this.setState({match: ""}), 2000);
      this.props.resetCards();
      this.addPack();
    }
    else {
      this.props.resetCards();
      this.setState({match: "no"});
      setTimeout(() => this.setState({match: ""}), 2000);
    }
  }

  gameOver () {
    this.setState({status: "game over"});
    this.setState({cardsList: this.state.cardList.sort(
      () => .5 - Math.random())});
    setTimeout(() => {
      this.setState({status: "game"});
      this.props.clearCount();
      this.setState({packs: []});
    }, 10000);
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
              status={this.state.status}
              match={this.state.match}/>))}
        </div>
      </div>
    );
  }
}

export default Board;
