import axios from 'axios';

export const indexCtrl = (req, res) => {
	res.json({
		status: true
	});
}

export const productsCtrl = (req, res) => {
	axios.get(`https://randomuser.me/api/?results=50`)
    .then((response) => {
    	res.json({
    		status: true,
    		data: response.data.results
    	})
    })
    .catch(function (error) {
    	// handle errors	
    });
}