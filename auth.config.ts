import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const path = nextUrl.pathname;

      // Si el usuario entra al dashboard y no está logueado → al login
      if (path.startsWith("/dashboard") && !isLoggedIn) {
        return false;
      }

      // Si está en "/" y está logueado → dashboard
      if (path === "/" && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      // Si está en "/" y no está logueado → login
      if (path === "/" && !isLoggedIn) {
        return Response.redirect(new URL("/sign-in", nextUrl));
      }

      // Si está en "/sign-in" y ya está logueado → dashboard
      if (path === "/sign-in" && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      // Todo lo demás se permite
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
