import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
	{
		slug: String,
		title: {
			type: String,
			required: true,
		},
		author: String,
		image: String,
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
