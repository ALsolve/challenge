const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Alarm = new Schema({
	user_id: {
		type: String,
        require: true
	},
    message:{
        type: String,
		maxlength: 100
    },
	read: {
        type: Number,
        default: 0
    },
    date:{
        type: Date,
        default: new Date()
    },
	api:{
		type: String
	}
}, {
	versionKey: false
});

Alarm.statics.create = function (user_id, message, api) {
	const alarm = new this({
		user_id,
		message,
		api
	})

	console.log("alarm 생성");
	console.log(alarm._id);

	// return the Promise
	return alarm.save()
}

module.exports = mongoose.model('alarms', Alarm);
