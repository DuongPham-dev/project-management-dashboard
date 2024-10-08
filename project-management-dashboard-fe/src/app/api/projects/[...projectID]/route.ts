import { NextRequest, NextResponse } from "next/server";

// Constants
import { DYNAMIC_PARAMS } from "@app/constants";
// Types
import { ParamsType } from "@app/types";
// Mocks
import {
  boards,
  cardAssignees,
  cardAttachments,
  cardComments,
  cards,
  lists,
  users,
} from "@app/mocks/backend";
// Utils
import { mockFetchData } from "@app/utils";

export const GET = (_: NextRequest, { params }: ParamsType) => {
  const projectID = params[DYNAMIC_PARAMS.PROJECT_ID];
  const project = boards.filter(({ id }) => projectID.includes(id))[0];
  const columns = [
    ...lists
      .filter(({ projectID }) => projectID.includes(project?.id ?? ""))
      .map(({ id, ...columnRest }) => ({
        id,
        ...columnRest,
        tasks: cards
          // Filter tasks by column
          .filter(({ columnID }) => columnID.includes(id))
          // Add field "assignees, commentQuantity, fileQuantity" by task
          .map(({ id, ...taskRest }) => ({
            id,
            ...taskRest,
            assignees: cardAssignees
              .filter(({ cardID }) => cardID.includes(id))
              .map(({ userID }) => {
                const usersInfo = userID
                  .map((id) =>
                    users.filter(({ id: user_id }) => user_id.includes(id))
                  )
                  .flat();

                return usersInfo;
              })[0],
            commentQuantity: cardComments.filter(({ taskID }) =>
              taskID.includes(id)
            ).length,
            fileQuantity: cardAttachments.filter(({ taskID }) =>
              id.includes(taskID)
            ).length,
          })),
      })),
  ].sort((a, b) => {
    // Sort column ASC by position
    if (a.position > b.position) return 1;

    if (a.position < b.position) return -1;

    return 0;
  });

  return mockFetchData({
    delaySeconds: 0,
    mockData: NextResponse.json({
      data: {
        ...project,
        columns,
      },
    }),
  });
};
