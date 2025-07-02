"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/dashboard/ui/button";
import { Input } from "@/components/dashboard/ui/input";
import { Label } from "@/components/dashboard/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/dashboard/ui/card";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";

interface SignInProps {
	onSignIn?: (email: string, password: string) => void;
}

export function SignIn({ onSignIn }: SignInProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState<{ email?: string; password?: string }>(
		{}
	);

	const validateForm = () => {
		const newErrors: { email?: string; password?: string } = {};

		if (!email) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!password) {
			newErrors.password = "Password is required";
		} else if (password.length < 6) {
			newErrors.password = "Password must be at least 6 characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsLoading(true);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			if (onSignIn) {
				onSignIn(email, password);
			}
			console.log("Sign in attempt:", { email, password });
		}, 1500);
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				{/* Bank Logo and Header */}
				<div className="text-center mb-8">
					<div className="flex items-center justify-center gap-3 mb-4">
						<div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-xl">G</span>
						</div>
						<div className="text-left">
							<h1 className="text-2xl font-bold text-slate-800">Globe Trust</h1>
							<p className="text-sm text-slate-600">Online Banking</p>
						</div>
					</div>
				</div>

				{/* Sign In Card */}
				<Card className="shadow-lg border-0">
					<CardHeader className="space-y-1 pb-6">
						<CardTitle className="text-2xl font-semibold text-slate-800 text-center">
							Sign In
						</CardTitle>
						<CardDescription className="text-center text-slate-600">
							Enter your credentials to access your account
						</CardDescription>
					</CardHeader>

					<CardContent>
						<form
							onSubmit={handleSubmit}
							className="space-y-4"
						>
							{/* Email Input */}
							<div className="space-y-2">
								<Label
									htmlFor="email"
									className="text-slate-700 font-medium"
								>
									Email Address
								</Label>
								<div className="relative">
									<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
									<Input
										id="email"
										type="email"
										placeholder="Enter your email address"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
											if (errors.email)
												setErrors({ ...errors, email: undefined });
										}}
										className={`pl-10 h-12 ${
											errors.email
												? "border-red-500 focus:border-red-500"
												: "border-gray-300 focus:border-red-500"
										}`}
										disabled={isLoading}
									/>
								</div>
								{errors.email && (
									<p className="text-sm text-red-600 mt-1">{errors.email}</p>
								)}
							</div>

							{/* Password Input */}
							<div className="space-y-2">
								<Label
									htmlFor="password"
									className="text-slate-700 font-medium"
								>
									Password
								</Label>
								<div className="relative">
									<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
									<Input
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="Enter your password"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
											if (errors.password)
												setErrors({ ...errors, password: undefined });
										}}
										className={`pl-10 pr-10 h-12 ${
											errors.password
												? "border-red-500 focus:border-red-500"
												: "border-gray-300 focus:border-red-500"
										}`}
										disabled={isLoading}
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
										disabled={isLoading}
									>
										{showPassword ? (
											<EyeOff className="w-5 h-5" />
										) : (
											<Eye className="w-5 h-5" />
										)}
									</button>
								</div>
								{errors.password && (
									<p className="text-sm text-red-600 mt-1">{errors.password}</p>
								)}
							</div>

							{/* Remember Me and Forgot Password */}
							<div className="flex items-center justify-between pt-2">
								<label className="flex items-center space-x-2 cursor-pointer">
									<input
										type="checkbox"
										className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
										disabled={isLoading}
									/>
									<span className="text-sm text-slate-600">Remember me</span>
								</label>
								<button
									type="button"
									className="text-sm text-red-600 hover:text-red-700 font-medium"
									disabled={isLoading}
								>
									Forgot password?
								</button>
							</div>

							{/* Sign In Button */}
							<Button
								type="submit"
								className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-semibold text-base mt-6"
								disabled={isLoading}
							>
								{isLoading ? (
									<div className="flex items-center gap-2">
										<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
										Signing In...
									</div>
								) : (
									"Sign In"
								)}
							</Button>
						</form>

						{/* Additional Links */}
						<div className="mt-6 pt-6 border-t border-gray-200">
							<div className="text-center space-y-3">
								<p className="text-sm text-slate-600">
									Don't have an account?{" "}
									<Link href="/banking">
										<button className="text-red-600 hover:text-red-700 font-medium">
											Open an Account
										</button>
									</Link>
								</p>
								{/* <div className="flex items-center justify-center gap-4 text-sm">
									<button className="text-slate-600 hover:text-slate-800">
										Security Center
									</button>
									<span className="text-slate-300">|</span>
									<button className="text-slate-600 hover:text-slate-800">
										Privacy
									</button>
									<span className="text-slate-300">|</span>
									<button className="text-slate-600 hover:text-slate-800">
										Help
									</button>
								</div> */}
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Security Notice */}
				<div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
					<div className="flex items-start gap-3">
						<div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
							<span className="text-white text-xs font-bold">i</span>
						</div>
						<div>
							<p className="text-sm text-blue-800 font-medium mb-1">
								Security Notice
							</p>
							<p className="text-xs text-blue-700">
								For your security, we'll never ask for your login credentials
								via email or phone. Always ensure you're on the official Bank of
								America website.
							</p>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className="mt-8 text-center text-xs text-slate-500">
					<p>© 2024 Bank of America Corporation. All rights reserved.</p>
					<p className="mt-1">Member FDIC. Equal Housing Lender.</p>
				</div>
			</div>
		</div>
	);
}
