import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router.js";
import useSWR from "swr";

export default function DetailsPage() {
	const router = useRouter();
	const { isReady } = router;
	const { slug } = router.query;
	const {
		// data: { post, comments } = {},
		data,
		isLoading,
		error,
	} = useSWR(slug ? `/api/posts/${slug}` : null);

	if (!isReady || isLoading)
		return <h2 className="align-center">Loading...</h2>;
	if (error) return <h2 className="align-center">Error! </h2>;

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
			<div className="fixed top-8 left-4 mt-40">
				<Link href="/blog" passHref legacyBehavior>
					<Link className="px-2.5 py-2 bg-yellow rounded-md font-bold text-black z-100">
						back
					</Link>
				</Link>
			</div>
			{data && data.post && data.post[0] && (
				<article className="rounded-md shadow-md bg-neutral-900/50 backdrop-blur-md p-4 mb-6 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-40">
					<div className="relative aspect-square h-48 overflow-hidden rounded-ms">
						<Image
							src={data.post[0].imageURL}
							priority
							width={200}
							height={200}
							layout="responsive"
							alt=""
							className="object-contain w-full h-full rounded-sm"
						/>
					</div>
					<div className="flex flex-row sm:flex-col ml-4">
						<h2 className="font-bold text-neutral-400 uppercase mt-1 mb-2">
							{data.post[0].title}
						</h2>
						<p className="text-base font-light text-gray-400 line-clamp-3">
							{data.post[0].content}
						</p>
						<div className="flex gap-2 mt-4">
							<Link href={`/blog/${slug}/edit`} passHref legacyBehavior>
								<Link className="bg-yellow font-bold text-black rounded-md p-2.5 m-1">
									edit
								</Link>
							</Link>
							<button
								onClick={deletePost}
								type="button"
								className="bg-red-800 font-bold text-white rounded-md p-2.5 m-1"
							>
								delete
							</button>
						</div>
					</div>
				</article>
			)}
		</>
	);
}

// 	return (
// 		<>
// 			<div className="relative mb-6">
// 				<Link
// 					href="/blog"
// 					passHref
// 					legacyBehavior
// 					className="absolute inset-0 left-2"
// 				>
// 					<Link className="fixed top-8 left-4 px-2.5 py-2 bg-yellow rounded-md font-bold text-black z-10">
// 						back
// 					</Link>
// 				</Link>
// 			</div>
// 			{data && data.post && data.post[0] && (
// 				<ImageContainer>
// 					<Image
// 						src={data.post[0].imageURL}
// 						priority
// 						width={100}
// 						height={100}
// 						layout="responsive"
// 						alt=""
// 						className="object-contain w-full h-full rounded-sm"
// 					/>
// 				</ImageContainer>
// 			)}
// 			<div className="text-center">
// 				<h2 className="uppercase my-2">{data.post[0].title}</h2>
// 			</div>
// 			<div className="font-mono font-extralight text-left text-pretty">
// 				<p>{data.post[0].content}</p>
// 			</div>
// 			<ButtonContainer>
// 				<Link href={`/blog/${slug}/edit`} passHref legacyBehavior>
// 					<Link className="bg-yellow font-bold text-black rounded-md p-2.5 m-1">
// 						Edit
// 					</Link>
// 				</Link>
// 				<button
// 					onClick={deletePost}
// 					type="button"
// 					className="bg-red-800 font-bold text-white rounded-md p-2.5 m-1"
// 				>
// 					Delete
// 				</button>
// 			</ButtonContainer>
// 		</>
// 	);
// }
//
// const ImageContainer = styled.div`
// 	position: relative;
// 	height: 15rem;
// `;

// const ButtonContainer = styled.section`
// 	display: flex;
// 	justify-content: space-between;
// 	gap: 0.2rem;

// 	& > * {
// 		flex-grow: 1;
// 		text-align: center;
// 	}
// `;
