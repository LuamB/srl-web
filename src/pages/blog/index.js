import useSWR from "swr";
import Link from "next/link.js";
import styled from "styled-components";
import BlogPreview from "../../components/BlogPreview";
import { StyledLink } from "../../components/StyledLink";
import SectionHeading from "../../components/SectionHeading";
// // public svg
// import postImgOne from "../../../public/evacuate-refugees-from-libya.svg";
// import postImgTwo from "../../../public/stop-italy-libya-mou.svg";
// import postImgThree from "../../../public/film-screening.svg";
// // public png
import postImgOne from "../../../public/evacuate-refugees-from-libya.png";
import postImgTwo from "../../../public/stop-italy-libya-mou.png";
import postImgThree from "../../../public/film-screening.png";

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

	if (isLoading) return <h2>Loading...</h2>;
	if (error) return <h2>Error! </h2>;
	// const postImages = [postImgOne, postImgTwo, postImgThree];
	// console.log("postImgOne", postImgOne);
	return (
		<>
			<SectionHeading>BLOG</SectionHeading>
			<List role="list">
				{data &&
					data.map((post, idx) => {
						return (
							<ListItem key={post.slug}>
								<BlogPreview
									// src={postImages[idx]}
									// fill
									// sizes="(max-width: 768px) 100vw,
									// (max-width: 1200px) 50vw,
									// 33vw"
									// alt=""
									title={post.title}
									content={post.content}
									slug={post.slug}
								/>
							</ListItem>
						);
					})}
			</List>
			<Link href="/blog/create" passHref legacyBehavior>
				<FixedLink>+ post</FixedLink>
			</Link>
		</>
	);
}
