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
}: GetTasksByProjectIdParams): Promise<Response> =>
  mockFetchData<Response>({
    mockData: new Response(JSON.stringify(mockTasks)),
  });
