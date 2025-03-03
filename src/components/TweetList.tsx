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
			<ul className="tweets">
				{tweetsByDate?.map((tweet) => {
					return (
						<li key={tweet.id}>
							<p>{tweet.id}</p>
							<p>{tweet.content}</p>
							<p>{tweet.username}</p>
							<p>{tweet.timestamp.toDateString()}</p>
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
