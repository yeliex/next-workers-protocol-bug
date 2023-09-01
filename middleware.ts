import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log("url in middleware", request.nextUrl);
  console.log("headers in middleware", Object.fromEntries(request.headers.entries()));
};
