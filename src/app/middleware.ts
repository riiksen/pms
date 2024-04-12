import { NextResponse, type NextRequest} from "next/server";
import { validateRequest } from "@/core/auth";

export async function middleware(request: NextRequest) {
  const { user } = await validateRequest();
  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: "/:path*",
};
