"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Input } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleLogin = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            // Customize message based on error
            if (error.message?.toLowerCase().includes("not found")) {
                toast.error("User not found ❌");
            } else if (error.message?.toLowerCase().includes("password")) {
                toast.error("Incorrect password ❌");
            } else {
                toast.error(error.message || "Login failed ❌");
            }
            return;
        }

        // Success
        toast.success("Login successful ✅");
    };

    return (
        <div className="mt-8 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl mx-auto py-6 sm:py-8 px-4 sm:px-6 md:px-8 border rounded-2xl shadow-sm bg-white animate__animated animate__fadeInDown">

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
                    Welcome Back
                </h2>

                <Form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

                    {/* Email */}
                    <div>
                        <Input
                            className="w-full"
                            label="Email"
                            type="email"
                            placeholder="john@example.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Input
                            className="w-full pr-10"
                            label="Password"
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                        />

                        <button
                            type="button"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer"
                        >
                            {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-2 ">
                        <Button
                            type="submit"
                            className="bg-green-600 text-white w-full "

                        >
                            Login
                        </Button>


                    </div>
                    <p>Not Have An Acoount <Link href={"/register"}><Button variant="outline">register now</Button></Link></p>
                </Form>

            </div>
        </div>
    );
};

export default LoginPage;