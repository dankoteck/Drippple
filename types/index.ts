export type Project = {
  id: string;
  title: string;
  image: string;
  category: string;
  createdBy: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
};

export type AllProjects = {
  allProjects: {
    edges: { node: Project }[];
    pageInfo: {
      endCursor: string;
    };
  };
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  projects: {
    edges: { node: Project }[];
    pageInfo: {
      endCursor: string;
    };
  };
};
