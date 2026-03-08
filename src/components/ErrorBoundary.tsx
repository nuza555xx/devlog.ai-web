import { Component, type ErrorInfo, type ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
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
              Something went wrong
            </h1>
            <p className="text-gray-500 text-sm">
              An unexpected error occurred. Please try again.
            </p>
            {this.state.error && (
              <pre className="text-left text-xs bg-gray-100 rounded-xl p-4 overflow-auto max-h-40 text-red-600 border border-gray-200">
                {this.state.error.message}
              </pre>
            )}
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                onClick={this.handleReset}
                className="px-6 py-2.5 bg-brand-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Try again
              </button>
              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="px-6 py-2.5 bg-white border border-gray-200 text-brand-black rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Go home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
