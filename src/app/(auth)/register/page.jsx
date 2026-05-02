"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Input } from "@heroui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";


const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleRegister = async (data) => {
        const { name, email, image, password } = data;


        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: image,
            callbackURL: "/",


        })
        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success("signUp Successful")
        }
    };

const handleGoogleSignIn = async() =>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data);
  
}


    return (
        <div className="w-full max-w-2xl mx-auto mt-10 px-4 sm:px-6 md:px-8 py-6 border rounded-2xl shadow-sm bg-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-3">
                Create Account
            </h2>

            <Form onSubmit={handleSubmit(handleRegister)} className="space-y-4 ">

                {/* Name */}
                <div>
                    <Input
                        className={"w-full"}
                        label="Name"
                        placeholder="Enter your name"
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters",
                            },
                        })}
                    />
                    {errors.name && (
                        <p className="text-sm text-red-500 mt-1">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Image URL */}
                <div>
                    <Input
                        className={"w-full"}
                        label="Image URL"
                        placeholder="https://example.com/image.jpg"
                        {...register("image", {
                            required: "Image URL is required",
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                                message: "Enter a valid image URL",
                            },
                        })}
                    />
                    {errors.image && (
                        <p className="text-sm text-red-500 mt-1">
                            {errors.image.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div >
                    <Input
                        className={"w-full"}
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
                        placeholder="Enter password"
                        {...register("password")}
                    />

                    <button
                        type="button"
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 "
                    >
                        {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <Button
                        type="submit"
                        className="bg-green-600 text-white w-full"

                    >
                        Register
                    </Button>
                   
                </div>
                        <Button onClick={handleGoogleSignIn} className={"w-full"} variant="outline"><FaGoogle/>Login with Google</Button>

            </Form>
        </div>
    );
};

export default RegisterPage;