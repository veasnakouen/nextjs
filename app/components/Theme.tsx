"use client";
import { ThemeProvider } from "next-themes";

import React from "react";

const Theme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Theme;
