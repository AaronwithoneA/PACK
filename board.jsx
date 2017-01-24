import React from 'react';

class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      setNumber: 0,
      cardList: [{
        size: "small",
        position: "standing",
        color: "dark",
        expression: "smile"
      }]
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
      <Card card={card} />)}
    </div>;
  }
}
