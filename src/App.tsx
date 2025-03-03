import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TweetList from "./components/TweetList";
import TweetForm from "./components/TweetForm";

let localTweets = [
	{
		id: 1,
		content: "Welcome to the React Tweet Board!",
		username: "admin",
		timestamp: new Date("2025-01-25"),
	},
	{
		id: 2,
		content: "This is my first tweet! #excited",
		username: "user1",
		timestamp: new Date("2025-02-25"),
	},
];

const onSaveCallback = (tweet: string) => {
	localTweets.push({
		id: localTweets.length + 1,
		content: tweet,
		username: "user1",
		timestamp: new Date(),
	});
};

function App() {
	return (
		<div className="App">
			<TweetList tweets={localTweets} />
			<TweetForm onSaveCallback={onSaveCallback} />
		</div>
	);
}

export default App;
