import { gql, useQuery } from "@apollo/client";

const GET_STARTUPS_NAME = gql`
query startupName($name: String!) {
	getStartupByName(name: $name) {
		name
		uuid
	}
}
`

export const useName = (name) => {
	const { data, error, loading } = useQuery(GET_STARTUPS_NAME, {
		variables: {
			name,
		},
	});
	console.log({ error, loading, data })

	return {
		data,
		error,
		loading,
	};
}
