var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('../lib/index');

var appElement = document.getElementById('JordanKnight');

Modal.setAppElement('#JordanKnight');

var App = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  handleModalCloseRequest: function() {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({modalIsOpen: false});
  },

  handleInputChange: function() {
    this.setState({foo: 'bar'});
  },

  render: function() {
    return (
      <div className="wrap">
        <a className="" onClick={this.openModal}><img src="css/images/jordansings.png" />
          <div className="product-hover">
        <span className="client">Old Navy</span>
        <span className="title">Jordan Knight Sings the Old Navy Catalog</span>
      </div>
        </a>
        <Modal className="modal"
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
        onRequestClose={this.handleModalCloseRequest}>
          <button className="close" onClick={this.closeModal}>X</button>
          <div className="tv">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tj2rX_tECRU?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
          </div>
        </Modal>
      </div>
    );
  }
});

ReactDOM.render(<App/>, appElement);
