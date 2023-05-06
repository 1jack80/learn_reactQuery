import { GoComment, GoIssueOpened } from "react-icons/go";

export function ListItem({ createdBy, createdDate, title, labels, number, assignee }) {
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
