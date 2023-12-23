/**
 * Several little utilities for this project.
 *
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getFirstLetters(username) {
  return username.split(" ").map((word) => word[0]);
}

export function isNotNullOrUndefined(value) {
  return value !== null && value !== undefined;
}

export function absoluteUrl(path) {
  // if (typeof window !== "undefined") return path;
  if (process.env.NODE_ENV === "development")
    return `http://localhost:${process.env.PORT ?? 3000}${path}`;

  return `https://${process.env.VERCEL_URL}${path}`;
}

export function constructMetadata({
  title = "Ataasil University - The online Salafi University",
  description = "Quill is an open-source software to make chatting to your PDF files easy.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@joshtriedcoding",
    },
    icons,
    metadataBase: new URL("https://ataasil.vercel.app"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
