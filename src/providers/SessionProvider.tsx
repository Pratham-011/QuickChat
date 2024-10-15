"use client";

import React from 'react';
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'; // Optional for TypeScript type checking

interface SessionProviderProps {
  children: React.ReactNode;
  session?: Session | null; // Accept session as a prop
}

export default function SessionProvider({ children, session }: SessionProviderProps) {
  return (
    <NextAuthSessionProvider session={session}>
      {children}
    </NextAuthSessionProvider>
  );
}
