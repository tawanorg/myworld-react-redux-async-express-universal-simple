if(process.env.NODE_ENV !== 'production') {
	require('babel-register');
	require('./src/server');
} else {
	require('./build');
}