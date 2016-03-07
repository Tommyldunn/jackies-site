var React = require('react');
var ReactDOM = require('react-dom');


var Portfolio = React.createClass({
  render : function() {
    return (
      <div className="container-fluid">
      <div className="row">
          <div className="col-md-4" id="pantsed"></div>
          <div className="col-md-4" id="inFlight"></div>
          <div className="col-md-4" id="RetirementHome"></div>
        </div>
        <div className="row">
          <div className="col-md-4" id="DiscoveryTales"></div>
          <div className="col-md-4" id="TheLaw"></div>
          <div className="col-md-4" id="PlugnPop"></div>
        </div>
        <div className="row">
          <div className="col-md-4" id="ParentTeacher"></div>
          <div className="col-md-4" id="SkinnyJeans"></div>
          <div className="col-md-4" id="JordanKnight"></div>
        </div>
        <div className="row">
          <div className="col-md-4" id="Jello"></div>
          <div className="col-md-4" id="Cheermageddon"></div>
          <div className="col-md-4" id="TripleBacon"></div>
        </div>
        </div>
        )
      }
    });


ReactDOM.render(<Portfolio/>, document.querySelector('#portfolio'));
