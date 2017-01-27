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
        border          : '1px solid #777',
        padding         : '20px',
        zIndex          : 11,
        width           : '500px',
        'min-width'     : '450px',
        height          : '600px',
        margin          : '0 auto',
        display         : 'flex',
        'border-radius' :  '10px',
        background      :  '#777',
        'box-shadow'    :  '4px 0 20px black',
        transform       :  'rotate(-8deg) translate(10%, -46%)',
        filter          :  'contrast(150%)'
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
                <div className='image-instructions'>
                  <div className='image-instruction-section'>
                    <div className='instruction-image-box'>
                      <div className="image-box">
                        <img className="instruction-image"
                          src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485286005/large_laying_mixed_tbgpuo.jpg"></img>
                      </div>
                      <div className='image-box'>
                        <img className="instruction-image"
                          src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485290695/medium_sitting_mixed_gngkqg.jpg"></img>
                      </div>

                      <img className="instruction-image"
                        src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485286886/Small_standing_mixed_lmcfzp.jpg"></img>
                    </div>
                    <div className='image-instruction-description'>
                      This is a valid pack because all 3 dogs are DIFFERENT sizes (large, medium, small),
                      the SAME coloring (mixed) and DIFFERENT positions (laying down, sitting, standing)

                    </div>
                  </div>
                  <div className='image-instruction-section'>
                    <div className='instruction-image-box'>
                      <img className="instruction-image"src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485288262/medium_sitting_mixed_wklepv.png"></img>
                      <img className="instruction-image"src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485287971/medum_standing_mixed_vmrode.jpg"></img>
                      <img className="instruction-image"src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1485288085/medium_sitting_light_tdthn1.jpg"></img>
                    </div>
                    <div className='image-instruction-description'>
                      This is not a valid pack because although all 3 dogs are the SAME size (medium),
                      they are NOT all the same of all different in coloring (mixed, mixed, light)
                      or position (sitting, standing, sitting)
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Modal>
      </div>
    );
  }
}

export default InstructionsModal;
