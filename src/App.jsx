import { useState } from "react";
import { GoComment, GoIssueOpened } from "react-icons/go";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="wrapper">
			<h1>Issue Tracker</h1>
			<div className="container">
				<main>
					<section className="searchSection">
						<label htmlFor="searchIssue">Search Issues</label>
						<input
							type="search"
							name="searchIssues"
							id="searchIssues"
							placeholder="Search"
						/>
					</section>

					<section className="issueSection">
						<h2>Issues List</h2>
						<ul className="issueList">
							<ListItem />
						</ul>
					</section>
				</main>
				<aside></aside>
			</div>
		</div>
	);
}

export default App;
function ListItem() {
	return (
		<li className="issueItem">
			<span className="">
				<GoIssueOpened className="issueIcon" />
			</span>
			<div>
				<header className="issueHeader">
					<h4 className="issueTitle">JQuery looks wierd on weekends</h4>
					<span className="issueLabel ">question</span>
				</header>
				<p className="issueDetails">#998 opened 3 hours ago by Tanner</p>
			</div>
			<img
				className="issueAssignee"
				src="https://res.cloudinary.com/uidotdev/image/twitter_name/tylermcginnis"
				alt="Avatar of assignee"
			/>

			<div className="issueCommentCount">
				<GoComment className="commentIcon" />
				<span className="commentCount">281</span>
			</div>
		</li>
	);
}
