const mongoose = require('mongoose');

const Model1Schema = new mongoose.Schema({

	key1: {type: String, default:'pork timmons' }, 
	key2: {type: Number, default: 314 }

});

const Model1 = mongoose.model('model1', Model1Schema );

module.exports = Model1;