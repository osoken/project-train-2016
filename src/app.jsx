var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  render: function() {
    return (
      <header class='clearfix'>
      </header>
    );
  }
});

ReactDOM.render(
  <Header />,
  document.getElementById('body')
);
