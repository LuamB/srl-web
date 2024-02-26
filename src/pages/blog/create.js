import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";
import useSWR from "swr";

const StyledBackLink = styled(StyledLink)`
	justify-self: flex-start;
`;

export default function CreatePostPage() {
	const router = useRouter();
	const { mutate } = useSWR("/api/posts");

	async function addPost(post) {
		console.log("post", post);

		// const formData = new FormData(post.target);
		// const postData = Object.fromEntries(formData);

		const response = await fetch("/api/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(post),
		});

		if (response.ok) {
			// mutate();
			router.push("/blog");
		}

		// router.push("/");
	}

	return (
		<>
			<h2 id="add-post">Add Post</h2>
			<Link href="/" passHref legacyBehavior>
				<StyledBackLink>back</StyledBackLink>
			</Link>
			<Form onSubmit={addPost} formName={"add-post"} />
		</>
	);
}
