import useSWR from "swr";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Form, { FormContainer, Label, Input } from "../../../components/Form.js";

export default function EditPage() {
	const router = useRouter();
	const { isReady } = router;
	const { slug } = router.query;
	const [imageSrc, setImageSrc] = useState();
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

	console.log("imageSrc", imageSrc);

	async function editPost(post) {
		// const editData = request.body;
		// editData.slug = editData.title
		// .toLowerCase()
		// .replace(/\s+/g, "-") // Replace spaces with -
		// .replace(/[^\w\-]+/g, "") // Remove all non-word chars
		// .replace(/\-\-+/g, "-") // Replace one or multiple - with single -
		// .replace(/^-+/, "") // Trim - from start of text
		// .replace(/-+$/, ""); // Trim - from end of text; //add slug key with slugyfied title
		// Handle cases where words are already joined with a dash
		// editData.slug = editData.slug.replace(/(\w)-(\w)/g, "$1$2");
		// const titleToSlug = slugify(post.post[0].title);
		// console.log("titleToSlug ", titleToSlug);
		const updatedObject = { ...post, imageURL: imageSrc };
		try {
			const response = await fetch(`/api/posts/${slug}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedObject),
			});

			if (response.ok) {
				// mutate(`/api/posts/${slug}`, post);
				mutate();
				router.push(`/blog/`); // router.back() we don't want to go back to the form
			} else {
				throw new Error("Failed to update post");
			}
		} catch (error) {
			console.error("Error:", error);
		}
		// check postData with imageURL
		console.log("updatedObject", updatedObject);
	}

	if (!isReady || isLoading)
		return <h2 className="align-center">Loading...</h2>;
	if (error) return <h2 className="align-center">Error! </h2>;

	// chech data
	console.log("Post to edit", post?.post[0]);
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
				onChange={handleOnChange}
				onSubmit={editPost}
				formName={"edit-post"}
				imageSrc={imageSrc}
				uploadData={uploadData}
				defaultData={post?.post[0]} // if post obj exists, access post value, otherwise undefined
			/>
		</>
	);
}

// export function slugify(title) {
// 	return title
// 		.toLowerCase()
// 		.replace(/\s+/g, "-") // Replace spaces with -
// 		.replace(/[^\w\-]+/g, "") // Remove all non-word chars
// 		.replace(/\-\-+/g, "-") // Replace one or multiple - with single -
// 		.replace(/^-+/, "") // Trim - from start of text
// 		.replace(/-+$/, ""); // Trim - from end of text; //add slug key with slugyfied title
// }
