import { GoComment, GoIssueOpened } from "react-icons/go";
import { relativeDate } from "../helpers/relativeDate.js";
import { useUserData } from "../helpers/useUserData.js";
import { useLabelData } from "../helpers/useLabelData.jsx";

export function IssueItem({
  commentCount,
  createdBy,
  createdDate,
  title,
  labels,
  number,
  assignee,
}) {
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
            <LabelObj
              key={label}
              labelId={label}
            />
          ))}
        </header>
        <small className="issueDetails">
          #{number} opened {relativeDate(createdDate)} by{" "}
          {createdByUser.isSuccess ? createdByUser.data.name : ""}
        </small>
      </div>
      <img
        className="issueAssignee"
        src={assigneeUser.isSuccess ? assigneeUser.data.profilePictureUrl : ""}
      />

      <div className="issueCommentCount">
        <GoComment className="commentIcon" />
        <span className="commentCount">{commentCount}</span>
      </div>
    </li>
  );
}

function LabelObj({ labelId }) {
  const labelQuery = useLabelData();
  if (labelQuery.isLoading) return null;
  const labelObj = labelQuery.data.find((l) => l.id === labelId);
  if (!labelObj) return null;
  return <span className={`issueLabel ${labelObj.color}`}> {labelObj.name} </span>;
}
