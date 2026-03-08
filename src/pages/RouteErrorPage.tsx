import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function RouteErrorPage() {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "Page not found";
      message = "The page you're looking for doesn't exist or has been moved.";
    } else {
      title = `Error ${error.status}`;
      message = error.statusText;
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
          <FontAwesomeIcon
            icon={["fas", "bolt"]}
            className="text-2xl text-red-500"
          />
        </div>
        <h1 className="font-heading text-2xl font-bold text-brand-black">
          {title}
        </h1>
        <p className="text-gray-500 text-sm">{message}</p>
        <div className="flex gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-2.5 bg-brand-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
