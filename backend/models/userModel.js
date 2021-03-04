import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			// no duplicate passwords
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		isAdmin: {
			type: Boolean,
			required: true,
			// So When the user registers they aren't in admin They will have to create another account
			default: false
		}
	},
	{
		timestamps: true
	}
);

const User = mongoose.model('User', userSchema);

export default User;
