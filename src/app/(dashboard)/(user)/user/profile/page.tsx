import React from "react";

// Utils
import { mockFetchData } from "@app/utils";
// COmponents
import { Text } from "@app/ui";

const ProfileUserPage = async () => {
  await mockFetchData();

  return (
    <Text as="h1" className="text-primary text-bold text-3xl">
      ProfileUserPage is coming soon
    </Text>
  );
};

export default ProfileUserPage;
