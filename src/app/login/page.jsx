"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

export default function LoginForm() {
  const { loginUser, googleLogin } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Email Login
  const onSubmit = async (data) => {
    try {
      const { email, password } = data;

      const result = await loginUser(email, password);

      toast.success("Login Successful!");
      router.push("/"); 
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Google Login Successful!");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md border-t-4 border-blue-600">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
          Login
        </h2>

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-blue-600 flex items-center justify-center gap-4 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-red-600 hover:shadow-xl transition mb-6"
        >
          <span className="bg-white rounded-full">
            <FcGoogle size={26} />
          </span>
          <span>Continue with Google</span>
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email is required" })}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
