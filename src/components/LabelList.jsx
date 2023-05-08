import { useLabelData } from "../helpers/useLabelData";

export function LabelList({ labelFilters, toggle }) {
  const labels = useLabelData();

  return (
    <>
      {labels.isLoading ? (
        "Loading..."
      ) : labels.isSuccess ? (
        <div>
          {labels.data.map((label) => (
            <button
              onClick={() => toggle(label.id)}
              key={label.id}
              className={`issueLabel ${label.color} ${
                labelFilters.includes(label.id) ? "selected" : ""
              }`}>
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
