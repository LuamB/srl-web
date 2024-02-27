import useSWR from "swr";
import Link from "next/link.js";
import styled from "styled-components";
import BlogPreview from "../../components/BlogPreview";
import { StyledLink } from "../../components/StyledLink";
import SectionHeading from "../../components/SectionHeading";
import postImgOne from "../../../public/evacuate-refugees-from-libya.svg";
import postImgTwo from "../../../public/stop-italy-libya-mou.svg";
import postImgThree from "../../../public/film-screening.svg";

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
	console.log("data in BlogPage", data);

	const images = [];

	const postImages = [postImgOne, postImgTwo, postImgThree];
	console.log("postImgOne", postImgOne);
	return (
		<>
			<SectionHeading>BLOG</SectionHeading>
			<List role="list">
				{data &&
					data.map((post, idx) => {
						return (
							<ListItem key={post.slug}>
								<BlogPreview
									src={images[idx]}
									fill
									sizes="(max-width: 768px) 100vw,
              		(max-width: 1200px) 50vw,
              		33vw"
									alt=""
									title={post.title}
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
