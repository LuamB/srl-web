import dbConnect from "../../../../../db/connect";
import Post from "../../../../../db/models/Post";

export default async function handler(request, response) {
	await dbConnect(); // initializing the connection
	const { slug } = request.query;
	console.log("slug", slug);

	if (!slug) {
		return response.status(404).json({ status: "Not found" });
	}

	switch (request.method) {
		case "GET":
			const post = await Post.find({ slug: slug });
			console.log("post=======", post);

			if (!post) {
				return response.status(404).json({ status: "Not found" });
			}
			return response.status(200).json({ post: post });

		case "PATCH":
			await Post.findOneAndUpdate({ slug: slug }, { $set: request.body });
			return response.status(200).json({ status: "Post updated" });

		case "DELETE":
			await Post.findOneAndDelete(slug);
			return response
				.status(200)
				.json({ status: `Post ${slug} successfully deleted.` });

		default:
			return response.status(405).json({ message: "Method not allowed" });
	}
}
