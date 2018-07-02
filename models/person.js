module.exports = () => {
	const mongoose     	= require('mongoose');
	const Schema       	= mongoose.Schema;

	var person  = new Schema({
		name: 			  {type : String},
		cpf:              {type : String}
	});

	return mongoose.model('person', person);
}