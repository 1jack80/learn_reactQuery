import { useLabelData } from "../helpers/useLabelData";

export const Label = ({ name, color }) => {
  const labelData = useLabelData();
  return (
    <>
      {labelData.isSuccess ? (
        <button className={`issueLabel ${color}`}>{name}</button>
      ) : (
        <></>
      )}
    </>
  );
};
