import styled from "styled-components";

export const FormContainer = styled.form`
	display: grid;
	gap: 0.5rem;
`;

export const Input = styled.input`
	padding: 0.5rem;
	color: black;
	font-size: inherit;
	border: 1px solid black;
	border-radius: 0.5rem;
`;

export const Textarea = styled.textarea`
	font-family: inherit;
	color: black;
	border: 1px solid black;
	border-radius: 0.5rem;
	padding: 0.5rem;
`;

export const Label = styled.label`
	font-weight: bold;
`;

export default function Form({ onSubmit, formName, defaultData }) {
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target); //add field for imageURL to be saved in mongodb
		const data = Object.fromEntries(formData);
		onSubmit(data);
	}

	return (
		<FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
			<Label htmlFor="title">Title</Label>
			<Input
				id="title"
				name="title"
				type="text"
				defaultValue={defaultData?.title}
			/>
			<Label htmlFor="content">Content</Label>
			<Textarea
				name="content"
				id="content"
				cols="30"
				rows="15"
				defaultValue={defaultData?.content}
			></Textarea>
			<button
				type="submit"
				className="bg-yellow text-black font-bold rounded-md p-2.5"
			>
				{defaultData ? "Update post" : "Add post"}
			</button>
		</FormContainer>
	);
}
