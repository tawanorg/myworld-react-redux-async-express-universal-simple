import { PRODUCTS_PENDING, PRODUCTS_RECEIVED, PRODUCTS_REJECT } from '../actions/ProductsAction';

const productsReducer = (state = {
  isFetching: false,
  data: [],
  receivedAt: null,
  error: false
}, action = null) => {
	switch (action.type) {
	    case PRODUCTS_PENDING:
	    	return Object.assign({}, state, {
	    		isFetching: true
	    	})
	    case PRODUCTS_RECEIVED:
	    	return Object.assign({}, state, {
	    		isFetching: false,
	    		data: action.data,
	    		receivedAt: action.receivedAt
	    	})
	    case PRODUCTS_REJECT:
	    	return Object.assign({}, state, {
	    		isFetching: false,
	    		data: action.data,
	    		error: true
	    	})
	    default:
	      return state
  	}
} 

export default productsReducer;