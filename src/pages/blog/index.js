import useSWR from "swr";
import Link from "next/link.js";
import styled from "styled-components";
import BlogPreview from "../../components/BlogPreview";
import { StyledLink } from "../../components/StyledLink";
import SectionHeading from "../../components/SectionHeading";

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding-left: 0;
`;

const ListItem = styled.li`
	position: relative;
	width: 100%;
`;
const FixedLink = styled(StyledLink)`
	position: fixed;
	bottom: 50px;
	right: 50px;
`;
export default function BlogPage() {
	// const { data, isLoading, error } = useSWR("/api/posts", { fallbackData: [] });
	const { data, isLoading, error } = useSWR("/api/posts");
	console.log("data in BlogPage", data);

	if (isLoading) return <h2 className="align-center">Loading...</h2>;
	if (error) return <h2 className="align-center">Error! </h2>;

	return (
		<>
			<SectionHeading>BLOG</SectionHeading>
			<List role="list">
				{data &&
					data.map((post) => {
						{
							console.log("imageURL ", post.imageURL);
						}
						return (
							<ListItem key={post.slug}>
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
							</ListItem>
						);
					})}
			</List>
			<Link href="/blog/create" passHref legacyBehavior>
				<FixedLink className="bg-yellow">+ post</FixedLink>
			</Link>
		</>
	);
}
