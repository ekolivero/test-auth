import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const useSecureCookies = !!process.env.VERCEL_URL;

console.log(process.env.NEXTAUTH_URL);
console.log(process.env.NEXTAUTH_URL_INTERNAL);
console.log(process.env.VERCEL_URL);

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.SECRET as string,
  /* cookies: {
    sessionToken: {
      name: `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        domain: ".test-auth-auth.vercel.sh",
        secure: useSecureCookies,
      },
    },
  }, */
});
