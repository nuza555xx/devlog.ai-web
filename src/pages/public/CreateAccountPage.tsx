import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { registerSchema, type RegisterSchema } from "../../schemas/auth";
import { useAuthStore } from "../../stores/authStore";

export function CreateAccountPage() {
  const navigate = useNavigate();
  const registerUser = useAuthStore((s) => s.register);
  const login = useAuthStore((s) => s.login);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchema) => {
    setSubmitError(null);
    try {
      await registerUser(data.email, data.password);
      await login(data.email, data.password);
      navigate("/dashboard");
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Registration failed. Please try again.",
      );
    }
  };

  return (
    <div className="flex items-center justify-center relative pb-12 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)]">
      {/* Background Blobs */}
      <div className="blob bg-brand-green w-[500px] h-[500px] rounded-full top-[-100px] left-[-100px] opacity-30" />
      <div className="blob bg-brand-pink w-[400px] h-[400px] rounded-full bottom-[-50px] right-[-50px] opacity-30" />
      <div className="blob bg-brand-beige w-64 h-64 rounded-full top-[30%] right-[20%] opacity-40" />

      <div className="w-full max-w-md animate-slide-up">
        {/* Auth Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 relative overflow-hidden">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-brand-black rounded-xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg transform -rotate-3">
              <FontAwesomeIcon icon={["fas", "memory"]} className="text-xl" />
            </div>
            <h1 className="font-heading text-3xl font-bold tracking-tight mb-2 text-brand-black">
              Create your account
            </h1>
            <p className="text-gray-500">
              Start building your developer knowledge base.
            </p>
          </div>

          {/* SSO Options */}
          <div className="space-y-3 mb-8">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="text-xl group-hover:scale-110 transition-transform"
              />
              <span className="font-medium text-gray-700">
                Sign up with GitHub
              </span>
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
            >
              <FontAwesomeIcon
                icon={["fab", "google"]}
                className="text-xl text-red-500 group-hover:scale-110 transition-transform"
              />
              <span className="font-medium text-gray-700">
                Sign up with Google
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400">
                or sign up with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {submitError && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">
                {submitError}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon
                    icon={["far", "envelope"]}
                    className="text-gray-400"
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  {...register("email")}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-black/20 focus:border-brand-black transition-all sm:text-sm"
                  placeholder="you@company.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon
                    icon={["fas", "lock"]}
                    className="text-gray-400"
                  />
                </div>
                <input
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password")}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-black/20 focus:border-brand-black transition-all sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon
                    icon={["fas", "lock"]}
                    className="text-gray-400"
                  />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  {...register("confirmPassword")}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-black/20 focus:border-brand-black transition-all sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="text-xs text-gray-400 leading-relaxed">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-brand-accent hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-brand-accent hover:underline">
                Privacy Policy
              </a>
              .
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-brand-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-black transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Creating account…" : "Create account"}
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-semibold text-brand-black hover:underline transition-all decoration-2 underline-offset-4"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-center animate-fade-in">
          <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">
            Secured by industry standards
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 opacity-50 grayscale">
            <FontAwesomeIcon
              icon={["fab", "aws"]}
              className="text-xl sm:text-2xl"
              title="AWS"
            />
            <FontAwesomeIcon
              icon={["fas", "shield-halved"]}
              className="text-xl sm:text-2xl"
              title="SOC2 Compliant"
            />
            <FontAwesomeIcon
              icon={["fas", "lock"]}
              className="text-xl sm:text-2xl"
              title="End-to-end Encryption"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
