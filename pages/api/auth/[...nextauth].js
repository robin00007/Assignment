import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },

      callback: {
        // async redirect({ url, baseUrl }) {
        //   console.log("robin",baseUrl+'/dashboard')
        //   return baseUrl+'/dashboard'
        // },
      },
      secret: process.env.NEXTAUTH_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);
