import { redirect } from "next/navigation";
import React from "react";

// Constants
import { DYNAMIC_PARAMS, ROUTER } from "@app/constants";
// Mocks
import { MY_PROJECT } from "@app/mocks";
// Utils
import { mockFetchData } from "@app/utils";
// Components
import { Text } from "@app/ui";
// Types
import { ParamsType } from "@app/types";

const MyProject = async ({ params }: ParamsType) => {
  await mockFetchData({});

  if (!MY_PROJECT.includes(params[DYNAMIC_PARAMS.PROJECT_ID])) {
    redirect(ROUTER.ROOT);
  }

  return (
    <Text as="h1" className="text-primary text-bold text-3xl">
      MyProject is coming soon
    </Text>
  );
};

export default MyProject;
