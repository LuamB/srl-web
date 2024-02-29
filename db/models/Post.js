import mongoose from "mongoose";

// const { default: slugify } = require("slugify");
// var slug = require("mongoose-slug-updater");
// mongoose.plugin(slug);

const { Schema } = mongoose;

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
		content: {
			type: String,
			required: true,
		},
		imageURL: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;

// Post.virtual("slug").get(function () {
// 	return slugify(this.title, { lower: true });
// });
