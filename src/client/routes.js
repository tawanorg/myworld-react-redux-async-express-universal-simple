import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App'
import Home from './components/Home'
import Product from './components/Product'
import NotFound from './components/NotFound'
 
export default (
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='product' component={Product} />
		<Route path='*' component={NotFound} />
	</Route>
)