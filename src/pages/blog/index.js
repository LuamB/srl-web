import Link from "next/link.js";
import styled from "styled-components";
import useSWR from "swr";
import SectionHeading from "../../components/SectionHeading";
import { StyledLink } from "../../components/StyledLink";
import BlogCard from "../../components/BlogCard";

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
	const { data, isLoading, error } = useSWR("/api/posts", { fallbackData: [] });
	console.log("data in blogpage", data);

	return (
		<>
			<SectionHeading>BLOG</SectionHeading>
			<List role="list">
				{data &&
					data.map((post) => {
						return (
							<ListItem key={post.slug}>
								<BlogCard
									title={post.title}
									image={post.image}
									content={post.content}
									slug={post.slug}
								/>
							</ListItem>
						);
					})}
			</List>
			<Link href="/create" passHref legacyBehavior>
				<FixedLink>+ post</FixedLink>
			</Link>
		</>
	);
}
