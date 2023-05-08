import "./App.css";
import { IssueItemList } from "./components/IssueItemList";
import { Label } from "./components/Label";
import { useLabelData } from "./helpers/useLabelData";

function App() {
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
          <section className="issueSection">
            <h2>Issues List</h2>
            <IssueItemList />
          </section>
        </main>
}

export default App;
