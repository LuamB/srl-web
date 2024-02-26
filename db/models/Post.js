import mongoose from "mongoose";

const { Schema } = mongoose;
var slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const postSchema = new Schema(
	{
		title: {
			type: String,
			unique: true,
			required: true,
		},
		slug: {
			type: String,
			slug: "title",
			unique: true,
			required: true,
		},
		author: {
			type: String,
		},
		image: {
			type: String,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
// comments: { type: [Schema.Types.ObjectId], ref: "Comment" },

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
