"use client";

import { useAddToFirestore } from "@/hooks/useAddToFirestore/useAddToFirestoreCollection";
import { useRegisterUser } from "@/hooks/useRegisterUserWithEmail/useRegisterUserWithEmail";
import { InfoIcon, Loader2 } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
	const searchParams = useSearchParams();
	const router = useRouter(); // for redirect
	const accountType = searchParams.get("type");

	const [loading, setLoading] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false); // ⭐ Success modal

	const [userInfo, setUserInfo] = useState({
		Fname: "John",
		Mname: "A.",
		Lname: "Doe",
		DOB: "1990-01-01",
		addressLine1: "123 Main St",
		addressLine2: "Apt 4B",
		city: "Springfield",
		state: "IL",
		zipCode: "62701",
		phoneNumber: "(555) 123-4567",
		email: "john.doe@example.com",
		verifyEmail: "john.doe@example.com",
		password: "SecurePassword123!",
		verifyPassword: "SecurePassword123!",
		country: "United States",
		employmentStatus: "employed",
		sourceOfIncome: "Salary",
	});

	const [userBankInfo, setUserBankInfo] = useState({
		currentBalance: 0.0,
		lastTransaction: 0.0,
	});

	const {
		register,
		loading: registerLoading,
		error: registerError,
	} = useRegisterUser();
	const {
		addDocument,
		loading: addDocumentgLoading,
		error: addDocumentError,
	} = useAddToFirestore();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			const success = await storeAndRegisterUser();
			if (success) {
				setShowSuccessModal(true);
			}
		} catch (error) {
			console.error("Error:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setUserInfo((prev) => ({ ...prev, [name]: value }));
	};

	const storeAndRegisterUser = async () => {
		try {
			const { email, verifyEmail, password, verifyPassword, Fname, Lname } =
				userInfo;

			if (
				email &&
				email === verifyEmail &&
				password &&
				password === verifyPassword
			) {
				const userAdded = await register(email, password);
				if (userAdded) {
					const accountNumber = Math.floor(Math.random() * 10000000000 + 1);

					const userDocAdded = await addDocument("users", {
						...userInfo,
						userId: userAdded.user.uid,
						isAdmin: false,
						accountNumber,
					});

					const userAccountAdded = await addDocument("accounts", {
						...userBankInfo,
						name: `${Fname} ${Lname}`,
						userId: userAdded.user.uid,
						email,
						accountNumber,
						accountType,
						transactionHistory: [
							{
								user: `${Fname} ${Lname}`,
								action: "withdrew",
								time: "22/03/2024",
								amount: 50000,
							},
							{
								user: `${Fname} ${Lname}`,
								action: "deposited",
								time: "22/03/2024",
								amount: 50000,
							},
							{
								user: `${Fname} ${Lname}`,
								action: "transfered",
								time: "22/03/2024",
								amount: 50000,
							},
						],
						pendingTransfers: [
							{
								recipient: `${Fname} ${Lname}`,
								email: email,
								amount: 500.0,
								deliveryDate: "2024-01-20",
								deliveryTime: "09:00",
								status: "Scheduled",
							},
							{
								recipient: `${Fname} ${Lname}`,
								email: email,
								amount: 500.0,
								deliveryDate: "2024-01-20",
								deliveryTime: "09:00",
								status: "Delivered",
							},
							{
								recipient: `${Fname} ${Lname}`,
								email: email,
								amount: 500.0,
								deliveryDate: "2024-01-20",
								deliveryTime: "09:00",
								status: "Scheduled",
							},
						],
					});

					if (userDocAdded && userAccountAdded) {
						console.log("Registration Success!");
						return true;
					}
				}
			} else {
				throw new Error("Email or Password mismatch");
			}
		} catch (error) {
			console.error("Registration error:", error);
			return false;
		}
	};

	return (
		<div className="main-p main-py">
			{/* Header */}
			<div className="bg-primary-500 p-4 text-lg text-white">
				Application | Globe Trust Banking
			</div>

			{/* Form Container */}
			<div className="bg-beige-100 p-2 md:p-4 lg:p-8">
				<div className="flex flex-col justify-center items-start gap-2 py-8">
					<h6 className="text-4xl text-primary-500">Your Information</h6>
					<p className="text-lg text-black/50">
						Welcome. Apply in Just Minutes
					</p>
				</div>

				<form onSubmit={handleSubmit}>
					{/* --- Personal Info --- */}
					<div className="relative flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-16 pb-8 w-full border-b border-black/30">
						<span className="absolute top-0 left-0 text-lg text-blue-500 w-full flex pt-2">
							<p>Personal</p>{" "}
							<span className="ml-auto text-primary-500">* required</span>
						</span>

						<input
							type="text"
							name="Fname"
							required
							placeholder="First Name *"
							className="w-full p-4 border border-gray-300 bg-white"
							value={userInfo.Fname}
							onChange={handleChange}
						/>
						<input
							type="text"
							name="Mname"
							placeholder="Middle Name"
							className="w-full p-4 border border-gray-300 bg-white"
							value={userInfo.Mname}
							onChange={handleChange}
						/>
						<input
							type="text"
							name="Lname"
							required
							placeholder="Last Name *"
							className="w-full p-4 border border-gray-300 bg-white"
							value={userInfo.Lname}
							onChange={handleChange}
						/>
						<input
							type="date"
							name="DOB"
							required
							placeholder="Date Of Birth *"
							className="w-full p-4 border border-gray-300 bg-white"
							value={userInfo.DOB}
							onChange={handleChange}
						/>
					</div>

					{/* --- Contact Info --- */}
					<div className="w-full flex flex-col border-b border-black/30">
						<div className="relative flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-16 pb-6 w-full">
							<span className="absolute top-0 left-0 text-lg text-blue-500 w-full flex pt-4">
								<p>Contact Info</p>{" "}
								<span className="ml-auto text-primary-500">* required</span>
							</span>
							<input
								type="text"
								name="addressLine1"
								required
								placeholder="Address Line 1 *"
								className="w-full p-4 border border-gray-300 bg-white"
								value={userInfo.addressLine1}
								onChange={handleChange}
							/>
							<input
								type="text"
								name="addressLine2"
								placeholder="Address Line 2 *"
								className="w-full p-4 border border-gray-300 bg-white"
								value={userInfo.addressLine2}
								onChange={handleChange}
							/>
							<input
								type="text"
								name="city"
								required
								placeholder="City *"
								className="w-full p-4 border border-gray-300 bg-white"
								value={userInfo.city}
								onChange={handleChange}
							/>
							<input
								type="text"
								name="state"
								required
								placeholder="State *"
								className="w-full p-4 border border-gray-300 bg-white"
								value={userInfo.state}
								onChange={handleChange}
							/>
							<input
								type="text"
								name="country"
								required
								placeholder="Country Of Residency *"
								className="w-full p-4 border border-gray-300 bg-white max-w-96"
								value={userInfo.country}
								onChange={handleChange}
							/>
							<input
								type="text"
								name="zipCode"
								required
								placeholder="ZIP Code"
								className="w-full p-4 border border-gray-300 bg-white"
								value={userInfo.zipCode}
								onChange={handleChange}
							/>
						</div>

						{/* --- Extra Info --- */}
						<div className="relative flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-36 pb-6 w-full">
							<span className="absolute top-0 left-0 w-full flex justify-start items-center gap-2">
								<span className="flex flex-col gap-2">
									<span className="font-semibold flex items-center gap-2">
										<InfoIcon className="text-blue-500 w-4" />
										<p>Keeping your account secure</p>
									</span>
									<p className="text-xs">
										To proceed with your registration, please provide your email
										address and password below.
									</p>
									<p className="text-xs">
										⚠️<span className="font-semibold"> Please note: </span> This
										email will be your secondary account number and used for
										verification.
									</p>
								</span>
							</span>

							<input
								type="text"
								name="phoneNumber"
								required
								placeholder="Phone number *"
								className="w-full p-4 border border-gray-300 bg-white"
								value={userInfo.phoneNumber}
								onChange={handleChange}
							/>
							<input
								type="text"
								name="email"
								required
								placeholder="Email Address *"
								className="w-full p-4 border border-gray-300 bg-white"
								value={userInfo.email}
								onChange={handleChange}
							/>
							<input
								type="text"
								name="verifyEmail"
								required
								placeholder="Re-enter Email Address *"
								className="w-full p-4 border border-gray-300 bg-white"
								value={userInfo.verifyEmail}
								onChange={handleChange}
							/>
							<input
								type="text"
								name="password"
								required
								placeholder="Enter Password *"
								className="w-full p-4 border border-gray-300 bg-white"
								value={userInfo.password}
								onChange={handleChange}
							/>
							<input
								type="text"
								name="verifyPassword"
								required
								placeholder="Re-enter Password *"
								className="w-full p-4 border border-gray-300 bg-white"
								value={userInfo.verifyPassword}
								onChange={handleChange}
							/>
						</div>
					</div>

					{/* --- Employment Info --- */}
					<div className="relative flex flex-col items-start gap-6 pt-16 pb-8 w-full border-b border-black/30">
						<span className="absolute top-0 left-0 text-lg text-blue-500 w-full flex pt-2">
							<p>Employment & finances</p>{" "}
							<span className="ml-auto text-primary-500">* required</span>
						</span>
						<select
							name="employmentStatus"
							required
							className="w-full p-4 border border-gray-300 bg-white max-w-96"
							value={userInfo.employmentStatus}
							onChange={handleChange}
						>
							<option value="">--Employment Status--</option>
							<option value="employed">Employed</option>
							<option value="retired">Retired</option>
							<option value="selfEmployed">Self Employed</option>
							<option value="student">Student</option>
							<option value="notEmployed">Not Employed</option>
						</select>
						<input
							type="text"
							name="sourceOfIncome"
							required
							placeholder="Source Of Income *"
							className="w-full p-4 border border-gray-300 bg-white max-w-96"
							value={userInfo.sourceOfIncome}
							onChange={handleChange}
						/>
					</div>

					{/* --- Consent & Submit --- */}
					<div className="relative flex flex-col gap-6 pt-16 pb-8 w-full">
						<p>
							By selecting Continue, you authorize us to obtain a credit
							report... and for any other lawful purpose.
						</p>
						<button
							type="submit"
							disabled={loading}
							className="bg-blue-500 text-white text-xl p-3 px-10 lg:w-fit flex items-center gap-2 disabled:opacity-60"
						>
							{loading && <Loader2 className="animate-spin w-5 h-5" />}
							{loading ? "Processing..." : "Continue"}
						</button>
					</div>
				</form>
			</div>

			{/* ⭐ Optional: Success Modal */}
			{showSuccessModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
					<div className="bg-white shadow-lg p-6 max-w-lg text-center">
						<h2 className="text-2xl font-semibold text-primary-500 mb-4">
							Application Submitted
						</h2>
						<p className="text-gray-700 text-md">
							Thank you for applying! Your account will be created and approved
							within <strong>2 business days</strong>. You will receive a
							confirmation email once it's ready.
						</p>
						<button
							className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md"
							onClick={() => router.push("/")}
						>
							Okay
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default page;
