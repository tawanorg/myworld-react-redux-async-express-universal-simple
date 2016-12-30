import React from 'react'
import { connect } from 'react-redux'
import { productPending, productsReceived, productsReject } from '../actions/ProductsAction'
import constants from '../constants'
import axios from 'axios'

const mapStateToProps = (state) => {
  const { productsReducer } = state
  const { data, isFetching } = productsReducer;
  return {
    products: data,
    isFetching
  };
}

export class ProductList extends React.Component {
  static propTypes = {
    isFetching: React.PropTypes.bool,
    products: React.PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);  
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts() {
    const { products, dispatch } = this.props;
    if(products.length === 0) {
      dispatch(productPending())
      axios.get(constants.baseApiUrl + `/products`)
      .then((response) => {
        const products = response.data;
        dispatch(productsReceived(products));
      })
      .catch(function (error) {
        dispatch(productsReject(error))
      });
    }
  }

  render() {
    const { products, isFetching } = this.props
    let productList = null;
    if(isFetching) {
      productList = (<div>Loading..</div>)
    } else {
      productList = (
        <ul>
        {
          products.map((item, key) => {
            return (<li key={key}>{item.name.first} - {item.name.last} - {item.email}</li>)
          })
        }
        </ul>
      )
    }

    return (
      <div>
      {productList}
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(ProductList);
