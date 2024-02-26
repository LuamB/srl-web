import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		min: 3,
		max: 20,
	},
	// email: {
	// 	type: String,
	// 	required: true,
	// },
	// image: String,
	isAdmin: false,
});
// comments: { type: [Schema.Types.ObjectId], ref: "Comment" },

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
