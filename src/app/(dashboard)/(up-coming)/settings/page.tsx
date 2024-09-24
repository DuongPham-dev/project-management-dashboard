import React from "react";

// Components
import { Text } from "@app/ui";
// Utils
import { mockFetchData } from "@app/utils";

const SettingsPage = async () => {
  await mockFetchData({});

  return (
    <Text as="h1" className="text-primary text-bold text-3xl">
      SettingsPage is coming soon
    </Text>
  );
};
export default SettingsPage;
