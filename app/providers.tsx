"use client";
import Initializer from "@/components/Protected/Initializer";
import { client } from "@/core";
import { googleClient } from "@/core/google";
import { ApolloProvider } from "@apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId={googleClient.clientId}>
      <ApolloProvider client={client}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <Initializer>{children}</Initializer>
        </ThemeProvider>
      </ApolloProvider>
    </GoogleOAuthProvider>
  );
}
