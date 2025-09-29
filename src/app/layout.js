"use client";

import "./globals.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
