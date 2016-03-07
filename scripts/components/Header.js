var React = require('react');
var ReactDOM = require('react-dom');


var SectionOne = React.createClass({
  render : function() {
    return (
      <div className="row content">
        <div className="title">
          <h1>Jackie Maloney</h1>
          <h2>producer</h2>
        </div>
        </div>
        )
      }
    });


ReactDOM.render(<SectionOne/>, document.querySelector('#main'));
