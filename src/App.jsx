import "./App.css";
import { ListItem } from "./ListItem";
import { useQuery } from "@tanstack/react-query";

function App() {
	const issueQuery = useQuery({
		queryKey: ["issues"],
		queryFn: () => {
			return fetch("https:/ui.dev/api/courses/react-query/issues").then((res) =>
				res.json()
			);
		},
	});

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
							{issueQuery.isLoading ? (
								<p>Loading...</p>
							) : issueQuery.isError ? (
								issueQuery.error.mesasge
							) : (
								issueQuery.data.map((issue) => (
									<ListItem
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
					</section>
				</main>
				<aside>
					<section className="labelsSection">
						<h3>Labels</h3>
						<ul></ul>
					</section>
					<section className="statusSection">
						<h3>Status</h3>
					</section>
				</aside>
			</div>
		</div>
	);
}

export default App;
