import React from 'react';
import Modal from 'react-modal';

class InstructionsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(240, 240, 255, 0.7)',
        zIndex          : 99999
      },

      content : {
        position        : 'fixed',
        top             : '50%',
        left            : '50%',
        right           : '50%',
        bottom          : '50%',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex          : 11,
        width           : '40%',
        'min-width'     : '450px',
        height          : '400px',
        margin          : '0 auto',
        transform       : 'translate(-50%, -50%)',
        display         : 'flex',
        'border-radius' :  '10px',
        'box-shadow'    :  '0px 3px 7px black'

      }
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }


  render() {
    return(
      <div className='modal-bar'>
        <button
          className='modal-button'
          onClick={this.openModal}>
          Pack
        <br/>
        How To Play
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.style}>
            <div className='modal-container'>
              <div className='modal-row-1'>
                <h2 className='modal-title'>Find your packs</h2>
              </div>
              <div className="description">
                The goal of the game is to pick sets of 3 furry friends
                who are either ALL the same or ALL different in each of
                three attributes
              </div>
              <div className='attribute-list-container'>
                <ul className="attribute-list">
                  <li>Size (small, medium, large)</li>
                  <li>Color (dark solid, light solid, mixed)</li>
                  <li>Position (standing, sitting, laying down)</li>
                </ul>
                <div>
                Packs can consist of a small dog, a medium dog, and a large dog
                <br/>
                Or three large dogs
                <br/>
                Or three sitting dogs
                <br/>
                Or a standing dog, a sitting dog, and a laying down dog
                <br/>
                Two small and a large don't make a pack
                <br/>
                The rules apply to ALL THREE attributes for each pack

                </div>
              </div>
            </div>
        </Modal>
      </div>
    );
  }
}

export default InstructionsModal;
