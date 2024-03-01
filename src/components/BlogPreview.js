import Link from "next/link";
import Image from "next/image";

const Article = ({ children }) => (
	<article className="border-5 border-black border-solid rounded-0.8 p-0.5 backdrop-blur-md">
		{children}
	</article>
);

const ImageContainer = ({ children }) => (
	<div className="relative h-40 overflow-hidden">{children}</div>
);

const Figure = ({ children }) => (
	<figure className="relative m-0">{children}</figure>
);

export default function BlogPreview({ slug, title, content, imageURL }) {
	// Split the content by sentence endings (". ", "! ", "? ").
	const sentences = content?.split(/(?<=[.!?])\s+/);
	// Take the first 5 sentences for the preview.
	const partialContent = sentences?.slice(0, 5).join(". ");

	return (
		<Article className="text-pretty">
			<Figure>
				{imageURL && (
					<ImageContainer>
						<Image src={imageURL} layout="fill" objectFit="cover" alt="" />
					</ImageContainer>
				)}
				<figcaption className="my-2">{title}</figcaption>
			</Figure>
<<<<<<< HEAD
			<p className="font-mono font-extralight text-left">{partialContent}</p>
=======
			<p className="font-mono font-extralight text-left text-pretty">
				{partialContent}
			</p>
>>>>>>> 6d81043bc8d14c305a0dc552fceeed259558aa74
			<Link href={`blog/${slug}`} passHref legacyBehavior>
				{/* Use a visually hidden span with text for screen readers */}
				<span className="sr-only">More Info</span>
			</Link>
		</Article>
	);
}

// const Article = styled.article`
// 	border: 5px solid black;
// 	border-radius: 0.8rem;
// 	padding: 0.5rem;
// `;

// const ImageContainer = styled.div`
// 	position: relative;
// 	height: 10rem;
// `;

// const Figure = styled.figure`
// 	position: relative;
// 	margin: 0;
// `;

// const Anchor = styled.a`
// 	&::after {
// 		content: "";
// 		display: block;
// 		position: absolute;
// 		top: 0;
// 		bottom: 0;
// 		left: 0;
// 		right: 0;
// 	}
// `;

// const ScreenReaderOnly = styled.span`
// 	position: absolute;
// 	width: 1px;
// 	height: 1px;
// 	padding: 0;
// 	margin: -1px;
// 	overflow: hidden;
// 	clip: rect(0, 0, 0, 0);
// 	white-space: nowrap;
// 	border-width: 0;
// `;

// export default function BlogPreview({ slug, title, content, imageURL }) {
// 	// Split the content by sentence endings (". ", "! ", "? ").
// 	const sentences = content?.split(/(?<=[.!?])\s+/);
// 	// Take the first 5 sentences for the preview.
// 	const partialContent = sentences?.slice(0, 5).join(". ");

// 	return (
// 		<Article>
// 			<Figure>
// 				{imageURL && (
// 					<ImageContainer>
// 						<Image src={imageURL} fill alt="" className="object-cover" />
// 					</ImageContainer>
// 				)}
// 				<figcaption>{title}</figcaption>
// 			</Figure>
// 			<p>{partialContent}</p>
// 			<Link href={`blog/${slug}`} passHref legacyBehavior>
// 				<Anchor>
// 					<ScreenReaderOnly>More Info</ScreenReaderOnly>
// 				</Anchor>
// 			</Link>
// 		</Article>
// 	);
// }
