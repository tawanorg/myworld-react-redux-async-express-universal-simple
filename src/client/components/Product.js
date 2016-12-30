import React from 'react';
import ProductList from '../containers/ProductList'

export default class Product extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Product List</h1>
        <ProductList />
      </div>
    );
  }
}
