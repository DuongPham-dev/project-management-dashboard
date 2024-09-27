import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  console.log();

  return NextResponse.json({ data: "123213" });
};
