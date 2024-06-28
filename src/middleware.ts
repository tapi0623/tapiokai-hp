import { NextResponse, NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  if (process.env.BASIC_AUTH_DISABLED === "true" || process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];

    const [username, password] = atob(authValue).split(":");

    if (username === process.env.BASIC_AUTH_USER && password === process.env.BASIC_AUTH_PASSWORD) {
      return NextResponse.next();
    }
  }

  const url = req.nextUrl;
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
};

export const config = {
  matcher: ["/live"],
};
