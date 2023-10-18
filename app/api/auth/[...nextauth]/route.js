import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "@/app/data/users";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                } else {
                    const user = users.find((user) => user.email === credentials.email);
                    if (user?.password === credentials.password) {
                        return user;
                    }
                    return null;
                }
            }
        })
    ]
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }