const { date } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommitSchema = new Schema({
	_id: {
		type: String,
	},
	count: {
		type: Number,
		default: 0
	}
});

var Challenge = new Schema({
	name: {
		type: String,
		required: true
	},
	challenge_start: {
		type: Date,
		default: Date.now,
	},
	challenge_end: {
		type: Date
	},
	challenge_users: {
		type: Array
	},
	challenge_user_num: {
		type: Number,
		default: 1
	},
	challenge_leader: {
		type: String,
		required: true
	},
	state:{
		type: Number,
		default: 0
	},
	commitCount: [CommitSchema]
}, {
	versionKey: false
});


Challenge.statics.create = function (userId, name, challenge_start, challenge_end) {
	const challenge = new this({
		name,
		challenge_start,
		challenge_end,
		challenge_leader: userId
	})

	const commitCount = challenge.commitCount.create({_id: userId})
	challenge.commitCount = commitCount
	
	challenge.challenge_users.push(userId)
	//commitCount 추가.

	console.log(challenge);

	// return the Promise
	return challenge.save()
}


Challenge.statics.findOneById = function (id) {
	return this.findOne({
		_id: id
	}).exec()
}

module.exports = mongoose.model('challenges', Challenge);