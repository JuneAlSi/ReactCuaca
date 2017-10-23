var React = require('react');

// Without arrow function

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

// With arror Function
var About = (props) => {
  return (
    <h3>About Component</h3>
  )
};

module.exports = About;
