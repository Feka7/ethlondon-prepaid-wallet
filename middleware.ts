import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  if(req.nextUrl.pathname.startsWith("/dashboard") && !req.auth?.user) {
    return NextResponse.redirect(new URL('/', req.url))
  }
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}