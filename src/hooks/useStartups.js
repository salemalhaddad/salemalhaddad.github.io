import { useQuery, gql } from "@apollo/client";

const GET_STARTUPS = gql`
	query {
		getAllStartups {
			name
			img
		}
	}
`;

export const useStartups = () => {
	const { error, loading, data } = useQuery(GET_STARTUPS);

	console.log({ error, loading, data })
	return {
		error,
		loading,
		data
	};
}
