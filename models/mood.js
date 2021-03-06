const { Schema, model } = require('mongoose');
const mongoose = require('../db/connection');

//schema
const moodSchema = new Schema({
	name: { type: String, required: true },
	foods: [
		{
			ref: 'Food',
			type: mongoose.Schema.Types.ObjectId,
		},
	],
});

//model
const Mood = model('Mood', moodSchema);

//export
module.exports = Mood;
