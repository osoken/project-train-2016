require( '../public/stylesheets/scss/style.scss' );

var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  render: function() {
    return (
      <header>
        header
      </header>
    );
  }
});

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
