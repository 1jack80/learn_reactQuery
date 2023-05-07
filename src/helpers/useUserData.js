import { useQuery } from "@tanstack/react-query";

export function useUserData(userId) {
	const userQuery = useQuery({
		queryKey: ["user", userId],
		queryFn: () =>
			fetch(`https://ui.dev/api/courses/react-query/users/${userId}`).then((res) =>
				res.json()
			),
	});

	return userQuery;
}
