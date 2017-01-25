import React from 'react';
import Card from './card';
import Modal from 'react-modal';
import InstructionsModal from './modal';

class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
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

  // componentWillReceiveProps () {
  //   // if (this.state.setNumber === 4) {
  //   //   this.winningScenario();
  //   }
  // }

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

  winningCondition () {
    console.log("match!");
  }

  componentDidUpdate () {
    if (this.checkMatch() === "<") {
      console.log("less than 3")
      return
    }
    else if (this.checkMatch()) {
      this.props.resetCards();
      this.winningCondition();
      this.forceUpdate()
    }
    else {
      this.props.resetCards();
      console.log("not a match")
      this.forceUpdate();
    }
  }



  render () {
    console.log(this.props.cards);
    return(
      <div>
        <div><InstructionsModal className='modal'/></div>
        <div>
          {this.props.setNumber}/4
        </div >
        <div className="cards-container">
          {this.state.cardList.map((card, i) => (
            <Card card={card}
              key={i}
              receiveCard={this.props.receiveCard}
              removeCard={this.props.removeCard}
              cards={this.props.cards}/>))}
        </div>
      </div>
    );
  }
}

export default Board;
