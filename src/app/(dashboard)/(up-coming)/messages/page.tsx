import React from "react";

// Components
import { Text } from "@app/ui";
// Utils
import { mockFetchData } from "@app/utils";

const MessagesPage = async () => {
  await mockFetchData({});

  return (
    <Text as="h1" className="text-primary text-bold text-3xl">
      MessagesPage is coming soon
    </Text>
  );
};
export default MessagesPage;
