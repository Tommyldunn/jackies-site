var React = require('react');
var ReactDOM = require('react-dom');


var Image = React.createClass({
  render : function() {
    return (
      <div>
    <img className="avatar" src="css/images/jackie.png" />
    </div>
        )
      }
    });


ReactDOM.render(<Image/>, document.querySelector('#Image'));
