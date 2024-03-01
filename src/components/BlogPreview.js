import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function BlogPreview({ slug, title, content, imageURL }) {
	// Split the content by sentence endings (". ", "! ", "? ").
	const sentences = content?.split(/(?<=[.!?])\s+/);
	// Take the first 5 sentences for the preview.
	const partialContent = sentences?.slice(0, 5).join(". ");

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

	return (
		<article className="rounded-md shadow-md bg-neutral-900/75 backdrop-blur-md p-4 flex flex-col gap-4">
			{/* <div className="relative aspect-square h-48 overflow-hidden"> */}
			<div className="relative aspect-w-1 aspect-h-1 h-48 overflow-hidden rounded-ms">
				{imageURL && (
					<Image
						priority
						src={imageURL}
						alt={title}
						width={200}
						height={200}
						layout="responsive"
						objectFit="cover"
						className="object-contain w-full h-full rounded-sm"
					/>
				)}
			</div>
			<div>
				<h2 className="font-bold text-neutral-400 uppercase mt-1 mb-2">
					{title}
				</h2>
				<p className="text-base font-light text-gray-400">{partialContent}</p>
				<Link href={`blog/${slug}`} passHref legacyBehavior>
					<Anchor>
						<ScreenReaderOnly>More Info</ScreenReaderOnly>
					</Anchor>
				</Link>
			</div>
		</article>
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
