import React from 'react';
import Card from './card';

class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      setNumber: 0,
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
        image: "https://cloudinary.com/console/media_library#/dialog/image/upload/small_laying_mixed_gonvr8"
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

  winningScenario () {

  }


  componentWillReceiveProps () {
    if (this.state.setNumber === 4) {
      this.winningScenario();
    }
  }

  render () {
    <div>
      <div>
        {this.state.setNumber}/4
      </div>
      {this.state.cardList.forEach((card) =>
      <Card card={card}
        receiveCard = {this.props.receiveCard}
        removeCard = {this.props.removeCard}/>)}
    </div>;
  }
}

export default Board;
