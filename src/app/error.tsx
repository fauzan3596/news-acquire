"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="flex h-screen w-full justify-center items-center">
      <div className="text-center">
        <h1 className="font-bold text-9xl">Error!</h1>
        <p className="font-medium text-4xl">Something went wrong</p>
        <p className="text-xl p-5">{error.message || "Sorry we could not fetch your data"}</p>
        <button
          className="btn btn-outline btn-primary"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Refresh
        </button>
      </div>
    </section>
  );
}
