import { FormQuery, FormQueryVariables } from "@/core/gql/graphql";
import { GET_FORM } from "@/core/queries";
import { useQuery } from "@apollo/client";

export default function useFormByID(id: string) {
  const formQuery = useQuery<FormQuery, FormQueryVariables>(GET_FORM, {
    variables: { where: { id: id } },
  });

  return {
    ...formQuery,
  };
}
