import { useState } from "react";
import "./App.css";
import { IssueItemList } from "./components/IssueItemList";
import { LabelList } from "./components/LabelList";

function App() {
  const [labelFilters, setLabelFilters] = useState([]);
  const [selectedStatus, setStatus] = useState("");

  function toggleFilter(labelId) {
    setLabelFilters((currentFilters) => {
      return currentFilters.includes(labelId)
        ? currentFilters.filter((label) => label != labelId)
        : currentFilters.concat(labelId);
    });
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
            <IssueItemList
              labelFilters={labelFilters}
              status={selectedStatus}
            />
          </section>
        </main>
        <aside>
          <section className="labelsSection">
            <h3>Labels</h3>
            <ul>
              <LabelList
                labelFilters={labelFilters}
                toggle={toggleFilter}
              />
            </ul>
          </section>
          <section className="statusSection">
            <h3>Status</h3>
            <StatusSelect
              value={selectedStatus}
              onChange={(evt) => setStatus(evt.target.value)}
            />
          </section>
        </aside>
      </div>
    </div>
  );
}

export default App;

const possibleStatus = [
  { id: "backlog", label: "Backlog" },
  { id: "todo", label: "To-do" },
  { id: "inProgress", label: "In Progress" },
  { id: "done", label: "Done" },
  { id: "cancelled", label: "Cancelled" },
];

function StatusSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="status-select">
      <option value="">Select a status</option>
      {possibleStatus.map((status) => (
        <option
          key={status.id}
          value={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  );
}
