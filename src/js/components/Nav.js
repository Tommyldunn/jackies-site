var React = require('react');
var ReactDOM = require('react-dom');


var Nav = React.createClass({
  render : function() {
    return (
      <div>
        <input id="toggle" type="checkbox"></input>

        <label for="toggle" class="hamburger">
          <div class="top-bun"></div>
          <div class="meat"></div>
          <div class="bottom-bun"></div>
        </label>

        <div class="nav">
          <div class="nav-wrapper">
            <nav>
              <a href="#">HOME</a><br />
                <a href="#">ABOUT</a><br />
                  <a href="#">WORK</a><br />
                    <a href="#">SERVICES</a>
                  </nav>
                </div>
              </div>
            </div>
          )
        }
      });


      ReactDOM.render(<Nav/>, document.querySelector('#navbar'));
