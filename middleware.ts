import { authMiddleware } from "@clerk/nextjs/server";

const publicRoutes = ["/api/uploadthing", "/api/webhook"];

export default authMiddleware({
  publicRoutes: publicRoutes,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
