// import { NextResponse } from "next/server";
import dbConnect from "../../../../db/connect";
import Post from "../../../../db/models/Post";

export default async function handler(request, response) {
	await dbConnect();

	if (request.method === "GET") {
		const posts = await Post.find();
		return response.status(200).json(posts);
	} else if (request.method === "POST") {
		try {
			const postData = request.body;
			postData.slug = postData.title
				.toLowerCase()
				.replace(/\s+/g, "-") // Replace spaces with -
				.replace(/[^\w\-]+/g, "") // Remove all non-word chars
				.replace(/\-\-+/g, "-") // Replace one or multiple - with single -
				.replace(/^-+/, "") // Trim - from start of text
				.replace(/-+$/, "") // Trim - from end of text; //add slug key with slugyfied title
				.replace(/(\w)-(\w)/g, "$1$2"); // Handle cases where words are already joined with a dash
			// // postData.imageURL = postData.file
			// console.log("postData ", postData);
			// console.log("postData.file ", postData.file);

			const newPost = await Post.create(postData);
			return response
				.status(201) // status code for successful post creation
				.json({ status: "Post created", post: newPost });
		} catch (error) {
			//  Check if it's a validation error from Mongoose
			if (error.name === "ValidationError") {
				return response.status(400).json({ message: error.message }); // validation errors
			}

			// Likely a different server error
			console.error("Error creating post:", error);
			return response.status(500).json({ message: "Something went wrong" }); // other server errors
		}
	} else {
		// check new post
		console.log("newPost ", newPost);
		// Respond to other methods, likely '405 - Method Not Allowed'
		return response.status(405).json({ message: "Method not allowed" });
	}
}

// //Programming with Umair - Nextjs 14 MongoDB Connection - Create Schemas and Fetch Data
// export async function GET(request) {
// 	try {
// 		await dbConnect();
// 		const posts = await Post.find();
// 		return new NextResponse(JSON.stringify(posts), { status: 200 });
// 	} catch (error) {
// 		return new NextResponse.json("Error in fetching posts" + error, {
// 			status: 500,
// 		});
// 	}
// }
