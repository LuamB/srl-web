import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import Form from "../../../components/Form.js";
import { StyledLink } from "../../../components/StyledLink.js";

export default function EditPage() {
	const router = useRouter(); // Add redirection logic using useRouter
	const { isReady } = router;
	const { slug } = router.query;
	const { data: post, isLoading, error, mutate } = useSWR(`/api/posts/${slug}`);
	console.log("post: ", post);

	async function editPlace(post) {
		// console.log("Place edited (but not really...)");

		try {
			const response = await fetch(`/api/posts/${slug}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(place),
			});

			if (response.ok) {
				// mutate(`/api/posts/${slug}`, place);
				mutate();
				router.back(); // //faster than router.push('/blog/${slug}')
			} else {
				throw new Error("Failed to update post");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	}

	if (!isReady || isLoading)
		return <h2 className="align-center">Loading...</h2>;
	if (error) return <h2 className="align-center">Error! </h2>;

	return (
		<>
			<h2 id="edit-post">Edit Place</h2>
			<Link href={`/posts/${slug}`} passHref legacyBehavior>
				<StyledLink className="justify-self-start">back</StyledLink>
			</Link>
			<Form
				onSubmit={editPost}
				formName={"edit-post"}
				defaultData={post?.post} // if post obj exists, access place value, otherwise undefined
			/>
		</>
	);
}
