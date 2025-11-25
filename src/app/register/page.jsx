"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation"; 
import useAuth from "@/app/hooks/useAuth";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const { registerUser, googleLogin, updateUserProfile } = useAuth();
  const router = useRouter(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userCredential = await registerUser(data.email, data.password);
      await updateUserProfile(data.name, data.image);
      console.log("User registered:", userCredential.user);
      toast.success('Register successful!')
      router.push("/"); 
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      console.log("Google user:", result.user);
      router.push("/"); 
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border-t-4 border-blue-600">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
          Register
        </h2>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-blue-600 flex items-center justify-center gap-4 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-red-600 hover:shadow-xl transition mb-4"
        >
          <span className="bg-white rounded-full">
            <FcGoogle size={26} />
          </span>
          <span>Continue with Google</span>
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email is required" })}
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
            />
            {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
          </div>

          {/* Profile Image */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium">Profile Image URL</label>
            <input
              type="text"
              placeholder="https://example.com/photo.jpg"
              {...register("image")}
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
