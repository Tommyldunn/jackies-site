var React = require('react');
var ReactDOM = require('react-dom');


var Resume = React.createClass({
  render : function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <button className="btn btn-lg">view my resume</button>
        </div>
      </div>
        )
      }
    });


ReactDOM.render(<Resume/>, document.querySelector('#resume'));
