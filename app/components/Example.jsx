var React = require('react');
var { Link } = require('react-router');

// var Example = React.createClass({
//   render: function () {
//     return (
//       <h3>Example Component</h3>
//     )
//   }
// });


// With arrow function
var Example = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Example</h1>
      <p>Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Jakarta'>Jakarta, Indonesia</Link>
        </li>
        <li>
          <Link to='/?location=Bandung'>Bandung, Indonesia</Link>
        </li>
      </ol>
    </div>

  )
};


module.exports = Example;
