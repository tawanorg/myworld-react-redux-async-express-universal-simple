import React from 'react';
import Navigation from '../containers/Navigation'

export default class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      Welcome App 
      <Navigation {...this.props} />
      {this.props.children}
      </div>
    );
  }
}
