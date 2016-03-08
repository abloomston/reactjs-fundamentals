var React = require('react');
var ReactDOM = require('react-dom');
var ColorList = React.createClass({
  render: function(){
    return (
      <ul>
        {this.props.colors.map(color => <li>{color}</li>)}
      </ul>
    );
  }
});
var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Hello, {this.props.name}</h3>
        <h4>You like the following colors:</h4>
        <ColorList colors={this.props.colors}/>
      </div>
    );
  }
});
ReactDOM.render(<HelloWorld name="Adam" colors={["orange","blue","black"]} />, document.getElementById('app'));
