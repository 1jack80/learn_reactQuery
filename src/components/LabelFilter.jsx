import { useLabelData } from "../helpers/useLabelData";

export const LabelFilter = ({ name, color }) => {
  const labelData = useLabelData();
  return (
    <>
      {labelData.isSuccess ? (
        <button
          onClick={filterIssuesList(name)}
          className={`issueLabel ${color}`}>
          {name}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
