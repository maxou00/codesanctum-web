"use client";
import { client } from "@/core";
import { ApolloProvider } from "@apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    console.log("window.GOOGLE_CLIENT_ID ", window.GOOGLE_CLIENT_ID);
  }, []);

  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
    >
      <ApolloProvider client={client}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </ApolloProvider>
    </GoogleOAuthProvider>
  );
}
