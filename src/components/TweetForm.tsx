import { useState } from "react";

interface TweetFormProps {
	onSaveCallback: (tweet: string) => void;
}

const TweetForm = ({ onSaveCallback }: TweetFormProps) => {
	const [tweetInput, setTweetInput] = useState("");
	const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTweetInput(event.target.value);
	};

	const onClickHandler = (event: React.MouseEvent) => {
		onSaveCallback(tweetInput);
	};

	const onSubmit = (event: any) => {
		event.preventDefault();

		onSaveCallback(tweetInput);
	};

	return (
		<form onSubmit={onSubmit}>
			<textarea onChange={inputHandler}></textarea>
			<button onClick={onClickHandler}>Submit</button>
			<div>{tweetInput}</div>
		</form>
	);
};

export default TweetForm;
