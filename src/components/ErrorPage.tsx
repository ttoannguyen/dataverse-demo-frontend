// src/pages/ErrorPage.tsx
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl font-bold text-red-500">Oops!</h1>
        <p className="text-lg mt-4">Sorry, an error has occurred.</p>
        <p className="text-md text-gray-600">
          {error.status} {error.statusText}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-4xl font-bold text-red-500">Something went wrong!</h1>
      <p className="text-md mt-4 text-gray-600">
        {error instanceof Error ? error.message : "Unknown error"}
      </p>
    </div>
  );
}
