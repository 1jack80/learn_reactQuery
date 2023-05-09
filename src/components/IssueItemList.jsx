import { IssueItem } from "./issueItem.jsx";
import { useQuery } from "@tanstack/react-query";

export function IssueItemList({ labelFilters, status }) {
  const issueQuery = useQuery({
    queryKey: ["issues", { labelFilters, status }],
    queryFn: () => {
      const statusFilter = !!status ? `&status=${status}` : "";
      const filterString = labelFilters.map((label) => `labels[]=${label}`).join("&");
      return fetch(
        `https:/ui.dev/api/courses/react-query/issues?${filterString}${statusFilter}`
      ).then((res) => res.json());
    },
  });

  return (
    <ul className="issueList">
      {issueQuery.isLoading && !issueQuery.isFetching ? (
        <p>Could not load issues</p>
      ) : issueQuery.isLoading ? (
        <p>Loading...</p>
      ) : issueQuery.isSuccess ? (
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
      ) : (
        <p>An error occurred</p>
      )}
    </ul>
  );
}
