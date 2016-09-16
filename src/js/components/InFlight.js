var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('../lib/index');

var appElement = document.getElementById('inFlight');

Modal.setAppElement('#inFlight');

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
        <a className="inFlight" onClick={this.openModal}><img src="public/images/in-flight-entertainment.png" />
          <div className="product-hover">
        <span className="client">Old Navy</span>
        <span className="info">In Flight Entertainment</span>
      </div>
        </a>
        <Modal className="modal"
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
        onRequestClose={this.handleModalCloseRequest}>
          <button className="close" onClick={this.closeModal}>X</button>
          <div className="tv">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lYygDpU2cJE?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
          </div>
        </Modal>
      </div>
    );
  }
});

ReactDOM.render(<App/>, appElement);
