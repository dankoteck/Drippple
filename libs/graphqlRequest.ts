import { GraphQLClient } from "graphql-request";
import { apiURL } from "~/constants";

export const graphqlClient = new GraphQLClient(apiURL as string);

export async function makeGraphQLRequest(query: string, variables = {}) {
  try {
    return await graphqlClient.request(query, variables);
  } catch (err) {
    console.log(err);
    throw err;
  }
}
