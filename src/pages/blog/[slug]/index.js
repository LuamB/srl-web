import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../../../components/StyledLink";
import { StyledButton } from "../../../components/StyledButton";
import { StyledImage } from "../../../components/StyledImage";

const ImageContainer = styled.div`
	position: relative;
	height: 15rem;
`;

const ButtonContainer = styled.section`
	display: flex;
	justify-content: space-between;
	gap: 0.2rem;

	& > * {
		flex-grow: 1;
		text-align: center;
	}
`;

const StyledLocationLink = styled(StyledLink)`
	text-align: center;
	background-color: white;
	border: 3px solid yellow;
`;

export default function DetailsPage() {
	const router = useRouter();
	const { isReady } = router;
	const { slug } = router.query;
	const {
		// data: { place, comments } = {},
		data,
		isLoading,
		error,
	} = useSWR(slug ? `/api/posts/${slug}` : null); // if slug is available, fetch the data, otherwise return null for id
	console.log("data: ", data);

	if (!isReady || isLoading) return <h2>Loading...</h2>;
	if (error) return <h2>Error! </h2>;

	async function deletePost() {
		if (confirm("Are you sure you want to delete this post?")) {
			await fetch(`/api/posts/${slug}`, {
				method: "DELETE",
			});
			router.push("/blog");
		}
	}

	return (
		<>
			<Link href={"/blog"} passHref legacyBehavior>
				<StyledLink justifySelf="start">back</StyledLink>
			</Link>
			<ImageContainer>
				<StyledImage
					src={data?.place.image}
					priority
					fill
					sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
					alt=""
				/>
			</ImageContainer>
			<h2>
				{data?.place.name}, {data?.place.location}
			</h2>
			<Link href={data?.place.mapURL} passHref legacyBehavior>
				<StyledLocationLink>Location on Google Maps</StyledLocationLink>
			</Link>
			<p>{data?.place.description}</p>
			<ButtonContainer>
				<Link href={`/posts/${slug}/edit`} passHref legacyBehavior>
					<StyledLink>Edit</StyledLink>
				</Link>
				<StyledButton onClick={deletePlace} type="button" variant="delete">
					Delete
				</StyledButton>
			</ButtonContainer>
		</>
	);
}

/* 
<Comments
  locationName={data?.place.name}
  comments={data?.place.comments}
> */
