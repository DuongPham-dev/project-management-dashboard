import React from "react";
import { BiPlus } from "react-icons/bi";

// UI
import { Button } from "@app/ui";

const Homepage = () => {
  return (
    <Button size="square-sm" radius="sm" isIconOnly>
      <BiPlus />
    </Button>
  );
};

export default Homepage;
