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
		event.preventDefault();
		onSaveCallback(tweetInput);
		setTweetInput("");
	};

	const onSubmit = (event: any) => {
		event.preventDefault();
		onSaveCallback(tweetInput);
		setTweetInput("");
	};

	return (
		<form onSubmit={onSubmit}>
			<textarea 
				value={tweetInput}
				onChange={inputHandler}
			></textarea>
			<button onClick={onClickHandler}>Submit</button>
		</form>
	);
};

export default TweetForm;
