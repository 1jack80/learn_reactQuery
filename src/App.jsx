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

	if (!issueQuery.isLoading) {
		console.log(issueQuery.data);
	}

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
								<ListItem />
							)}
						</ul>
					</section>
				</main>
				<aside></aside>
			</div>
		</div>
	);
}

export default App;
