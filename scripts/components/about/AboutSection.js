var React = require('react');
var ReactDOM = require('react-dom');


var About = React.createClass({
  render : function() {
    return (
      <div className="container-fluid about">
        <div className="row">
          <div className="col-md-6" id="Image">tommy</div>
          <div className="col-md-6" id="Text">tommy</div>
        </div>
      </div>
        )
      }
    });


ReactDOM.render(<About/>, document.querySelector('#about'));
