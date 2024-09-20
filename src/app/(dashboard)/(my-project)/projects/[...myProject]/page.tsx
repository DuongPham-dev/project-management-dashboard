import { redirect } from "next/navigation";
import React from "react";

// Constants
import { ROUTER } from "@app/constants";
// Mocks
import { MY_PROJECT } from "@app/mocks";
// Utils
import { mockFetchData } from "@app/utils";
// Components
import { Text } from "@app/ui";

interface PageParams {
  params: {
    myProject: string[];
  };
}

const MyProject = async ({
  params: {
    myProject: [currentProject],
  },
}: PageParams) => {
  await mockFetchData();

  if (!MY_PROJECT.includes(currentProject)) {
    redirect(ROUTER.ROOT);
  }

  return (
    <Text as="h1" className="text-primary text-bold text-3xl">
      MyProject is coming soon
    </Text>
  );
};

export default MyProject;
