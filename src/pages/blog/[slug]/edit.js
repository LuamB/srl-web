import useSWR from "swr";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Form, { FormContainer, Label, Input } from "../../../components/Form.js";

export default function EditPage() {
	const router = useRouter(); // Add redirection logic using useRouter
	const { isReady } = router;
	const { slug } = router.query;
	const [imageScr, setImageSrc] = useState();
	const [uploadData, setUploadData] = useState();
	const { data: post, isLoading, error, mutate } = useSWR(`/api/posts/${slug}`);
	console.log("post: ", post);

	function handleOnChange(changeEvent) {
		const reader = new FileReader();

		reader.onload = function (onLoadEvent) {
			setImageSrc(onLoadEvent.target.result);
			setUploadData(undefined);
		};

		reader.readAsDataURL(changeEvent.target.files[0]);
	}

	async function handleOnSubmit(event) {
		event.preventDefault();

		const form = event.currentTarget;
		const fileInput = Array.from(form.elements).find(
			({ name }) => name === "file"
		);
		const formData = new FormData();

		for (const file of fileInput.files) {
			formData.append("file", file);
		}

		formData.append("upload_preset", "gyj9k80n");

		const data = await fetch(
			"https://api.cloudinary.com/v1_1/dkaiau7al/image/upload",
			{
				method: "POST",
				body: formData,
			}
		).then((r) => r.json());
		// check URL from cloudinary
		console.log(data.secure_url);

		setImageSrc(data.secure_url);
		setUploadData(data);
	}

	async function editPost(post) {
		try {
			const response = await fetch(`/api/posts/${slug}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(post),
			});

			if (response.ok) {
				// mutate(`/api/posts/${slug}`, post);
				mutate();
				router.back(); // faster than router.push('/blog/${slug}')
			} else {
				throw new Error("Failed to update post");
			}
			// chech data
			console.log("Post to edit", post.post[0]);
		} catch (error) {
			console.error("Error:", error);
		}
	}

	if (!isReady || isLoading)
		return <h2 className="align-center">Loading...</h2>;
	if (error) return <h2 className="align-center">Error! </h2>;

	return (
		<>
			<h2 id="edit-post">Edit Post</h2>
			<Link href={`/blog/${slug}`} passHref legacyBehavior>
				<Link className="justify-self-start bg-yellow font-bold text-black rounded-md p-2.5">
					back
				</Link>
			</Link>
			<FormContainer onChange={handleOnChange} onSubmit={handleOnSubmit}>
				<Label htmlFor="file">Image Upload</Label>
				<Input
					id="file"
					name="file"
					type="file"
					className="bg-white"
					// defaultValue={defaultData?.file}
				/>
				<button className="rounded-lg bg-neutral-500 text-black">
					Upload File
				</button>
			</FormContainer>
			<Form
				onSubmit={editPost}
				formName={"edit-post"}
				defaultData={post?.post[0]} // if post obj exists, access post value, otherwise undefined
			/>
		</>
	);
}
