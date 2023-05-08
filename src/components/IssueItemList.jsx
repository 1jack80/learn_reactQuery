import { IssueItem } from "./issueItem.jsx";
import { useQuery } from "@tanstack/react-query";

export function IssueItemList() {
	const issueQuery = useQuery({
		queryKey: ["issues"],
		queryFn: () => {
			return fetch("https:/ui.dev/api/courses/react-query/issues").then((res) =>
				res.json()
			);
		},
	});

	return (
		<ul className="issueList">
			{issueQuery.isLoading ? (
				<p>Loading...</p>
			) : issueQuery.isError ? (
				issueQuery.error.mesasge
			) : (
				issueQuery.data.map((issue) => (
					<IssueItem
						assignee={issue.assignee}
						createdBy={issue.createdBy}
						createdDate={issue.createdDate}
						labels={issue.labels}
						number={issue.number}
						title={issue.title}
						commentCount={issue.comments.length}
						key={issue.id}
					/>
				))
			)}
		</ul>
	);
}
