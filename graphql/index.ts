import { gql } from "graphql-request";

export const getProjectsQuery = gql`
  query GetProjects($category: String, $endCursor: String) {
    allProjects(
      first: 8
      after: $endCursor
      filter: { category: { eq: $category } }
    ) {
      pageInfo {
        endCursor
      }
      edges {
        node {
          id
          type
          title
          image
          category
          createdBy {
            id
            email
            name
            avatar
          }
        }
      }
    }
  }
`;

export const getUserQuery = gql`
  query GetUser($email: String!) {
    user(by: { email: $email }) {
      id
      name
      email
      avatar
      description
    }
  }
`;

export const createUserMutation = gql`
  mutation CreateUser($input: UserCreateInput!) {
    userCreate(input: $input) {
      user {
        id
        name
        email
        avatar
      }
    }
  }
`;
