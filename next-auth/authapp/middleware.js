export { default } from "next-auth/middleware";

//here we need to add all page we want to protected
export const config = { matcher: ["/dashboard"] };
