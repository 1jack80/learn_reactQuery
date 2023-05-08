import { useLabelData } from "../helpers/useLabelData";
import { LabelFilter } from "./LabelFilter";

export function LabelList() {
  const labels = useLabelData();

  return (
    <>
      {labels.isLoading ? (
        "Loading..."
      ) : labels.isSuccess ? (
        <div>
          {labels.data.map((label) => (
            <button
              // onClick={}
              key={label.id}
              className={`issueLabel ${label.color}`}>
              {label.name}
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
