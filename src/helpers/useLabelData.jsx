import { useQuery } from "@tanstack/react-query";

export function useLabelData() {
  const labelQuery = useQuery({
    queryKey: ["labels"],
    queryFn: () => {
      return fetch("https://ui.dev/api/courses/react-query/labels").then((res) =>
        res.json()
      );
    },
  });

  return labelQuery;
}
