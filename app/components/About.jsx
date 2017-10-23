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
    <div>
      <h3>About </h3>
      <p>This is about Weather.</p>
    </div>
  )
};

module.exports = About;
