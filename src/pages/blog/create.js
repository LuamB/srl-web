import useSWR from "swr";
import Link from "next/link.js";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import Form from "../../components/Form";
import { StyledLink } from "../../components/StyledLink.js";

const StyledBackLink = styled(StyledLink)`
	justify-self: flex-start;
`;

export default function CreatePostPage() {
	const router = useRouter();
	const { mutate } = useSWR("/api/posts");
	const [imageSrc, setImageSrc] = useState();
	const [uploadData, setUploadData] = useState();
	/**
	 * handleOnChange
	 * @description Triggers when the file input changes (ex: when a file is selected)
	 */

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

		formData.append("upload_preset", "gyj9k80n>");

		const data = await fetch(
			"https://api.cloudinary.com/v1_1/dkaiau7al/image/upload",
			{
				method: "POST",
				body: formData,
			}
		).then((r) => r.json());

		setImageSrc(data.secure_url);
		setUploadData(data);
	}

	async function addPost(post) {
		console.log("post", post);

		const response = await fetch("/api/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(post),
		});
		console.log("response", response);
		if (response.ok) {
			// mutate();
			router.push("/blog");
		}
	}

	return (
		<>
			<div className="relative mb-6">
				<Link
					href="/blog"
					passHref
					legacyBehavior
					className="absolute inset-0 left-2"
				>
					<StyledBackLink className="bg-yellow">back</StyledBackLink>
				</Link>
			</div>
			<h2 id="add-post" className="my-2">
				Add Post
			</h2>
			<Form
				onChange={handleOnChange}
				onSubmit={addPost}
				method="post"
				formName={"add-post"}
				imageSrc={imageSrc}
				uploadData={uploadData}
			/>
		</>
	);
}
