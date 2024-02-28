import styled, { css } from "styled-components";

export const StyledLink = styled.a`
	/* background-color: yellow; */
	padding: 0.8rem 1.5rem;
	border-radius: 0.6rem;
	text-decoration: none;
	font-weight: bold;
	color: black;

	${({ variant }) =>
		variant === "outlined" &&
		css`
			text-align: center;
			background-color: white;
			border: 3px solid yellow;
		`}
`;
