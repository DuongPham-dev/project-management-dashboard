// Types
import { ID } from "@app/types";
// Mocks
import { mockTasks } from "@app/mocks";
// Utils
import { mockFetchData } from "@app/utils";

export interface GetTasksByProjectIdParams {
  projectId: ID;
}

export const getTasksByProjectId = async ({
  projectId,
}: GetTasksByProjectIdParams): Promise<Response> => {
  console.log({ projectId });

  return mockFetchData<Response>({
    mockData: new Response(JSON.stringify(mockTasks)),
  });
};
