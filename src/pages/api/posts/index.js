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
			postData.slug = postData.title.replace(" ", "-").toLowerCase();
			console.log("postData ", postData);
			const newPost = await Post.create(postData);

			console.log("newPost ", newPost);
			return response
				.status(201) // status code for successful post creation
				.json({ status: "Post created", post: newPost });
		} catch (error) {
			console.error(error);
			//  Check if it's a validation error from Mongoose
			if (error.name === "ValidationError") {
				return response.status(400).json({ message: error.message }); // validation errors
			}

			// Likely a different server error
			console.error("Error creating post:", error);
			return response.status(500).json({ message: "Something went wrong" }); // other server errors
		}
	} else {
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
