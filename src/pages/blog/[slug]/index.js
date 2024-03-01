import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";

const ImageContainer = styled.div`
	position: relative;
	height: 15rem;
`;

const ButtonContainer = styled.section`
	display: flex;
	justify-content: space-between;
	gap: 0.2rem;

	& > * {
		flex-grow: 1;
		text-align: center;
	}
`;

export default function DetailsPage() {
	const router = useRouter();
	const { isReady } = router;
	const { slug } = router.query;
	const {
		// data: { post, comments } = {},
		data,
		isLoading,
		error,
	} = useSWR(slug ? `/api/posts/${slug}` : null); // if slug is available, fetch the data, otherwise return null for id

	if (!isReady || isLoading)
		return <h2 className="align-center">Loading...</h2>;
	if (error) return <h2 className="align-center">Error! </h2>;

	console.log("data: ", data);
	async function deletePost() {
		if (confirm("Are you sure you want to delete this post?")) {
			await fetch(`/api/posts/${slug}`, {
				method: "DELETE",
			});
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
					<Link className="bg-yellow font-bold text-black rounded-md p-2.5">
						back
					</Link>
				</Link>
			</div>
			{data && data.post && data.post[0] && (
				<ImageContainer>
					<Image
						src={data.post[0].imageURL}
						priority
						fill
						// sizes="(max-width: 768px) 100vw,
						//   (max-width: 1200px) 50vw,
						//   33vw"
						alt=""
						className="object-cover"
					/>
				</ImageContainer>
			)}
			<div className="text-center">
				<h2 className="uppercase my-2">{data.post[0].title}</h2>
			</div>
			<div className="font-mono font-extralight text-left text-pretty">
				<p>{data.post[0].content}</p>
			</div>
			<ButtonContainer>
				<Link href={`/blog/${slug}/edit`} passHref legacyBehavior>
					<Link className="bg-yellow font-bold text-black rounded-md p-2.5 m-1">
						Edit
					</Link>
				</Link>
				<button
					onClick={deletePost}
					type="button"
					className="bg-red-800 font-bold text-white rounded-md p-2.5 m-1"
				>
					Delete
				</button>
			</ButtonContainer>
		</>
	);
}

/* 
<Comments
  locationName={data?.post.name}
  comments={data?.post.comments}
> */
