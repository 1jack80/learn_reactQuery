import { useLabelData } from "../helpers/useLabelData";

export const Label = (labelId) => {
  const labelData = useLabelData(labelId);
  return (
    <>
      {labelData.isSuccess ? (
        <button className={`issueItem ${labelData.color}`}>{labelData.name}</button>
      ) : (
        <></>
      )}
    </>
  );
};
