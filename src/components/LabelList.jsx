import { useLabelData } from "../helpers/useLabelData";
import { LabelFilter } from "./Label";

export function LabelList() {
  const labels = useLabelData();

  return (
    <>
      {labels.isLoading ? (
        "Loading..."
      ) : labels.isSuccess ? (
        <div>
          {labels.data.map((label) => (
            <LabelFilter
              key={label.id}
              name={label.name}
              color={label.color}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
