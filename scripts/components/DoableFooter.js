var React = require('react');
var ReactDOM = require('react-dom');


var DoableFooter = React.createClass({
  render : function() {
    return (
      <div className="">
          <a className="mail" href="contact.html"><i className="fa fa-envelope fg-4x"></i></a>
           </div>
        )
      }
    });


ReactDOM.render(<DoableFooter/>, document.querySelector('#footer'));
