var React = require('react');
var ReactDOM = require('react-dom');


var JackieFooter = React.createClass({
  render : function() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <span className="address"> <i className="fa fa-home"></i> | 1944 Cloverfield Blvd. | Unit D | Santa Monica, CA 90404</span>
            </div>
            <div className="col-md-4">
              <a className="mail" href="mailto:jacquelynmaloney@gmail.com"><i className="fa fa-envelope"></i></a>
            </div>
            <div className="col-md-4">
              <span className="address"><i className="fa fa-phone"></i> |  818.917.7257</span>
            </div>
          </div>
        </div>
        )
      }
    });

ReactDOM.render(<JackieFooter/>, document.querySelector('#footer'));
