// Constants
import { API, ENDPOINT } from "@app/constants";
// Types
import { ID, ProjectResponse } from "@app/types";
// Utils
import { generateURL } from "@app/utils";

export const getProjectByID = async (
  projectID: ID
): Promise<ProjectResponse> => {
  const response = await fetch(
    generateURL(API.MAIN, [ENDPOINT.PROJECTS, projectID]),
    {
      cache: "no-store",
    }
  );

  if (!response.ok) throw new Error("Can not fetch project");

  const project: ProjectResponse = (await response.json()).data;

  return project;
};
