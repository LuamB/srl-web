import useSWR from "swr";
import Link from "next/link.js";
import BlogPreview from "../../components/BlogPreview";
import SectionHeading from "../../components/SectionHeading";

export default function BlogPage() {
	// const { data, isLoading, error } = useSWR("/api/posts", { fallbackData: [] });
	const { data, isLoading, error } = useSWR("/api/posts");
	console.log("data in BlogPage", data);

	if (isLoading) return <h2 className="align-center">Loading...</h2>;
	if (error) return <h2 className="align-center">Error! </h2>;

	return (
		<>
			<SectionHeading>BLOG</SectionHeading>
			<ul
				role="list"
				className="list-none flex flex-col items-center gap-4 pl-0"
			>
				{data &&
					data.map((post) => {
						{
							console.log("imageURL ", post.imageURL);
						}
						return (
							<li key={post.slug} className="relative w-full">
								<BlogPreview
									imageURL={post.imageURL}
									// sizes="(max-width: 768px) 100vw,
									// (max-width: 1200px) 50vw,
									// 33vw"
									alt=""
									title={post.title}
									content={post.content}
									slug={post.slug}
								/>
							</li>
						);
					})}
			</ul>
			<Link href="/blog/create" passHref legacyBehavior className="relative">
				<Link className="fixed bottom-8 right-8 p-2 md:p-4 bg-yellow-400 rounded-md font-bold text-black">
					+ post
				</Link>
			</Link>
		</>
	);
}
