/** @type {import('tailwindcss').Config} */
import { blackA, violet } from "@radix-ui/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F9EFE4",
        },
        secondary: {
          DEFAULT: "#F6CE31",
        },
        silver: {
          DEFAULT: "#F7F8FA",
        },
        dark: {
          DEFAULT: "#454545",
        },
        ...blackA,
        ...violet,
      },
      space: {
        base: "1rem",
      },
      fontSize: {
        heading: [
          "3rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        label: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "500",
          },
        ],
        title: [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
};
