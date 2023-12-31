import { createUserMutation, getProjectsQuery, getUserQuery } from "~/graphql";
import { graphqlClient, makeGraphQLRequest } from "./graphqlRequest";
import { apiKey } from "~/constants";

export async function getProjects(
  category?: string | null,
  endCursor?: string | null
) {
  // const data = [
  //   {
  //     type: "image",
  //     url: "https://cdn.dribbble.com/userupload/8140612/file/original-041fc7f713644d26a14c750ba3d0d195.png",
  //     title: "Dreaming",
  //     likes: 26,
  //     views: 454,
  //     author: {
  //       name: "Razvan Vezeteu",
  //       avatar:
  //         "https://cdn.dribbble.com/users/1008875/avatars/mini/44a98b02a150d9048a7d4864e0ffdd97.jpg?1667305511",
  //     },
  //   },
  //   {
  //     type: "video",
  //     url: "https://cdn.dribbble.com/userupload/6609444/file/large-489301378a5ec7a87cbc71c3cb82df7b.mp4",
  //     title: "Start your free trial",
  //     likes: 109,
  //     views: 7100,
  //     author: {
  //       name: "Squarespace",
  //       avatar:
  //         "https://cdn.dribbble.com/users/174531/avatars/mini/15aa8b82e7c45563c3300038f5e18c5b.jpg?1575308145",
  //     },
  //   },
  // ];

  graphqlClient.setHeader("x-api-key", endCursor || "");

  return makeGraphQLRequest(getProjectsQuery, { category, endCursor });
}

export async function getUser(email: string) {
  return makeGraphQLRequest(getUserQuery, { email });
}

export async function createUser(name: string, email: string, avatar: string) {
  graphqlClient.setHeader("x-api-key", apiKey!);

  const variables = {
    input: {
      name,
      email,
      avatar,
    },
  };

  return makeGraphQLRequest(createUserMutation, variables);
}
