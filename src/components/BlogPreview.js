import Link from "next/link.js";
import styled from "styled-components";
import { StyledImage } from "./StyledImage.js";

const Article = styled.article`
	border: 5px solid black;
	border-radius: 0.8rem;
	padding: 0.5rem;
`;

const ImageContainer = styled.div`
	position: relative;
	height: 10rem;
`;

const Figure = styled.figure`
	position: relative;
	margin: 0;
`;

const Anchor = styled.a`
	&::after {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
`;

const ScreenReaderOnly = styled.span`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
`;
// // RegEx to remove special character from title
// title = title.toLowerCase()                   // Turn to lower
//   .match(/[a-z0-9\s-]+/g)                     // Extract all alnum + hyphen and whitespace chunks
//   .map(x => x.trim().split(/\s+/).join("-"))  // Trim the items, split with whitespace and join with a hyphen
//   .join("-")                                  // Join the items with a hyphen

export default function BlogPreview({ slug, title, content, image }) {
	// Split the content by sentence endings (". ", "! ", "? ").
	const sentences = content?.split(/[.?!]\s+/);
	// Take the first 5 sentences for the preview.
	const partialContent = sentences?.slice(0, 5).join(". ");

	return (
		<Article>
			<Figure>
				<ImageContainer>
					{/* <StyledImage
						src={image}
						fill
						width={300}
						height={300}
						// sizes="(max-width: 768px) 100vw,
						//   (max-width: 1200px) 50vw,
						//   33vw"
						alt=""
					/> */}
				</ImageContainer>
				<figcaption>{title}</figcaption>
			</Figure>
			<p>{partialContent}</p>
			<Link href={`blog/${slug}`} passHref legacyBehavior>
				<Anchor>
					<ScreenReaderOnly>More Info</ScreenReaderOnly>
				</Anchor>
			</Link>
		</Article>
	);
}
