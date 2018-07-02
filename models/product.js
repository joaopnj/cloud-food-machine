module.exports = () => {
	const mongoose     	= require('mongoose');
	const Schema       	= mongoose.Schema;

	var product  = new Schema({
		name: 			{type : String},
		price:          {type : Number}
	});

	return mongoose.model('product', product);
}