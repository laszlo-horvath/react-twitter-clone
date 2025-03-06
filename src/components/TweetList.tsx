type BaseObject = {
	id: number;
};

type Tweet = BaseObject & {
	content: string;
	username: string;
	timestamp: Date;
};

interface TweetListProps {
	tweets?: Tweet[];
}

const TweetList = ({ tweets }: TweetListProps) => {
	// empty screen
	if (tweets?.length === 0) {
		return <div>No tweets founds.</div>;
	}

	const tweetsByDate = [...(tweets as Tweet[])]?.sort((a, b) => {
		return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
	});

	// render the data
	return (
		<div>
			<h2>Recent Tweets</h2>
			<ul className="tweets">
				{tweetsByDate?.map((tweet) => {
					return (
						<li key={tweet.id}>
							<div className="tweet-header">
								<span className="tweet-username">@{tweet.username}</span>
								<span className="tweet-date">{tweet.timestamp.toDateString()}</span>
							</div>
							<div className="tweet-content">{tweet.content}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TweetList;
// function testFunction (input1 = {}, input2 = 'defaultValue', input3) {

// }
