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
        width           : '35%',
        'min-width'     : '450px',
        height          : '550px',
        margin          : '0 auto',
        // transform       : 'translate(-50%, -50%)',
        display         : 'flex',
        'border-radius' :  '10px',
        background      :  '#777',
        'box-shadow'    :  '0 35px 20px #777',
        transform       :  'rotate(-8deg) translate(-2%, -30%)'
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
        How To Play
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={this.style}>
            <div className='modal-container'>
              <div className='modal-row-1'>
                <h2 className='modal-title'>Unleash 4 Packs to Win</h2>
              </div>
              <div className="description">
                A pack contains 3 dogs, where each of the following attributes
                are either the same across three dogs, or completely
                different:
              </div>
              <div className='attribute-list-container'>
                <ul className="attribute-list">
                  <li>Size   (small, medium, large)</li>
                  <br/>
                  <li>Color   (dark solid, light solid, mixed)</li>
                  <br/>
                  <li>Position   (standing, sitting, laying down)</li>
                  <br/><br/>
                </ul>
                <div className='additional-instructions'>
                </div>
              </div>
            </div>
        </Modal>
      </div>
    );
  }
}

export default InstructionsModal;
