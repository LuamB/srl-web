import Link from "next/link.js";
import SectionHeading from "./SectionHeading";
import BlogCard from "./BlogCard";

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
	const { data } = useSWR("/api/posts", { fallbackData: [] });

	return (
		<>
			<SectionHeading>BLOG</SectionHeading>
			<List role="list">
				{data.map((post) => {
					return (
						<ListItem key={post._id}>
							<BlogCard
								name={post.name}
								image={post.image}
								location={post.location}
								id={`${post._id.$oid ?? post._id}`}
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
