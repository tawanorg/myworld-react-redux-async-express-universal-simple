import React from 'react';

export default class Notfound extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
		    <h3>404 page not found</h3>
		    <p>We are sorry but the page you are looking for does not exist.</p>
	  	</div>
    );
  }
}
