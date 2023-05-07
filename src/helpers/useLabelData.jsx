import { useQuery } from "@tanstack/react-query";

export function useLabelData(labelId) {
  labelQuery = useQuery({
    queryKey: ["label", labelId],
    queryFn: () => {
      return fetch(`https://ui.dev/api/courses/react-query/labels/${labelId}`).then(
        (res) => res.json()
      );
    },
    enabled: !!labelId,
  });
  return labelQuery;
}
