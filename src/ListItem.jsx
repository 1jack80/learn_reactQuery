import { GoComment, GoIssueOpened } from "react-icons/go";
import { relativeDate } from "./helpers/relativeDate";
import { useUserData } from "./helpers/useUserData";

export function ListItem({ createdBy, createdDate, title, labels, number, assignee }) {
	const createdByUser = useUserData(createdBy);

	const assigneeUser = useUserData(assignee);

	return (
		<li className="issueItem">
			<span className="">
				<GoIssueOpened className="issueIcon" />
			</span>
			<div>
				<header className="issueHeader">
					<h4 className="issueTitle">{title}</h4>
					{labels.map((label) => (
						<span
							className="issueLabel "
							key={label}>
							{label}
						</span>
					))}
				</header>
				<small className="issueDetails">
					#${number} opened {relativeDate(createdDate)} by{" "}
					{createdByUser.isSuccess ? createdByUser.data.name : ""}
				</small>
			</div>
			<img
				className="issueAssignee"
				src={assigneeUser.isSuccess ? assigneeUser.data.profilePictureUrl : ""}
				// alt="assignee avatar "
			/>

			{/* <span>{assignee}</span> */}
			<div className="issueCommentCount">
				<GoComment className="commentIcon" />
				<span className="commentCount"></span>
			</div>
		</li>
	);
}
