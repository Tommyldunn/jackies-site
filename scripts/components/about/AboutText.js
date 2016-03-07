var React = require('react');
var ReactDOM = require('react-dom');


var Text = React.createClass({
  render : function() {
    return (
      <div>
    <p className="text">Hi, I'm Jackie Maloney and I've been a producer for 5 1/2 years.  I am dedicated to the creative process and love helping it be the best it can be. Whether that's finding a great director, spread-sheeting the hell out of some budgets, playing psychiatrist to the creatives, or putting on metaphorical boxing gloves and saying "No way am I paying for that overage."
I love to create, problem solve, and maintain a creative and passionate environment for production. I have great relationships with vendors, creatives, account services, biz affairs and clients, and am typically requested to produce more and more with each team I work with. My own style of producing has been dubbed Maloneying1 by some of my past creative teams.
</p>
<i>1. Maloneying, The act of simultaneously balancing the hectic and multi-faceted aspects of production, keeping clients happy, creatives fulfilled, meeting deadlines and miracle-working with budgets in a synergistic burst of motivation, fun, laughter (lots of laughter) all while creating something beautiful and transcendent in the process.
</i>
    </div>
        )
      }
    });


ReactDOM.render(<Text/>, document.querySelector('#Text'));
