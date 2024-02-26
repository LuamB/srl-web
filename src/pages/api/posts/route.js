import { NextResponse } from "next/server";
import dbConnect from "../../../../db/connect";
import Post from "../../../../db/models/Post";

export async function GET(request) {
	try {
		await dbConnect();
		const posts = await Post.find();
		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		return new NextResponse.json("Error in fetching posts" + error, {
			status: 500,
		});
	}
}
