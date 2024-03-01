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

			if (!post) {
				return response.status(404).json({ status: "Not found" });
			}
			return response.status(200).json({ post: post });

		case "PATCH":
			const patchData = request.body;
			patchData.slug = patchData.title
				.toLowerCase()
				.replace(/\s+/g, "-") // Replace spaces with -
				.replace(/[^\w\-]+/g, "") // Remove all non-word chars
				.replace(/\-\-+/g, "-") // Replace one or multiple - with single -
				.replace(/^-+/, "") // Trim - from start of text
				.replace(/-+$/, "") // Trim - from end of text; //add slug key with slugyfied title
				.replace(/(\w)-(\w)/g, "$1$2"); // Handle cases where words are already joined with a dash
			// await Post.findOneAndUpdate({ slug: slug }, { $set: request.body });
			await Post.findOneAndUpdate({ slug: slug }, { $set: patchData });
			// check updated slug
			console.log("updated slug", patchData.slug);
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
