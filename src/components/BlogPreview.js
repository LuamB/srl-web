// import Link from "next/link";
// import Image from "next/image";

import Link from "next/link";
import Image from "next/image";

export default function BlogPreview({ slug, title, content, imageURL }) {
	return (
		<Link href={`blog/${slug}`} passHref={true} legacyBehavior={true}>
			<a className="group block aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden shadow-lg backdrop-filter backdrop-blur-md relative">
				<div className="h-full">
					{imageURL && (
						<Image
							src={imageURL}
							alt=""
							layout="responsive"
							width={500}
							height={500}
							objectFit="cover"
							className="object-cover"
						/>
					)}
					<div className="absolute inset-0 flex flex-col items-center justify-center">
						<h2 className="text-white text-2xl font-bold p-4 bg-black bg-opacity-50 group-hover:bg-opacity-75">
							{title}
						</h2>
						<p className="text-gray-100 p-4 text-center">{content}</p>
					</div>
				</div>
			</a>
		</Link>
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
