import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
	{
		slug: {
			type: String,
			required: true,
		},
		title: {
			type: String,
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
