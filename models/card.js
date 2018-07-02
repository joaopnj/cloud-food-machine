module.exports = () => {
	const mongoose     	= require('mongoose');
	const Schema       	= mongoose.Schema;

	var card  = new Schema({
		number: 			{type : Number},
		amount: 			{type : Number},
		owner:              {type : Object}
	});

	return mongoose.model('card', card);
}