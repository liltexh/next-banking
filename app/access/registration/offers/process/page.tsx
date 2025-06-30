"use client";
import { useAddToFirestore } from "@/hooks/useAddToFirestore/useAddToFirestoreCollection";
import { useRegisterUser } from "@/hooks/useRegisterUserWithEmail/useRegisterUserWithEmail";
import { th } from "date-fns/locale";
import { InfoIcon } from "lucide-react";
import { useState } from "react";

const page = () => {
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
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setUserInfo((prev) => ({ ...prev, [name]: value }));
		console.log(name, value);
	};
	const storeAndRgisterUser = async () => {
		// This function will handle the user registration logic

		try {
			const { email, verifyEmail, password, verifyPassword } = userInfo;
			if (
				email &&
				email == verifyEmail &&
				password &&
				password == verifyPassword
			) {
				const userAdded = await register(email, password);
				if (userAdded) {
					const userDocAdded = await addDocument("users", {
						...userInfo,
						userId: userAdded.user.uid,
						accountNumber: Math.floor(Math.random() * 10 + 1),
					});

					userDocAdded &&
						console.log("User Document Added Successfully", userDocAdded);
				}
			} else {
				throw new Error("Email or Password mismatch");
			}
		} catch (error) {}
	};
	return (
		<div className="main-p main-py">
			<div className="bg-primary-500 p-4 text-lg text-white">
				Application | Globe Trust Banking
			</div>
			<div className=" bg-beige-100 p-2 md:p-4 lg:p-8">
				<div className="flex flex-col justify-center items-start gap-2 py-8">
					<h6 className="text-4xl text-primary-500">Your Information</h6>
					<p className="text-lg text-black/50">
						Welcome. Apply in Just Minutes{" "}
					</p>
				</div>
				<form
					action=""
					className=""
				>
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
							onChange={handleChange}
						/>
						<input
							type="text"
							name="Mname"
							placeholder="Middle Name"
							className="w-full p-4 border border-gray-300 bg-white"
							onChange={handleChange}
						/>
						<input
							type="text"
							name="Lname"
							required
							placeholder="Last Name *"
							className="w-full p-4 border border-gray-300 bg-white"
							onChange={handleChange}
						/>
						<input
							type="date"
							name="DOB"
							required
							placeholder="Date Of Birth *"
							className="w-full p-4 border border-gray-300 bg-white"
							onChange={handleChange}
						/>
					</div>
					{/*Contact Info*/}
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
								onChange={handleChange}
							/>
							<input
								type="text"
								name="addressLine2"
								placeholder="Address Line 2 *"
								className="w-full p-4 border border-gray-300 bg-white"
								onChange={handleChange}
							/>
							<input
								type="text"
								name="city"
								required
								placeholder="City *"
								className="w-full p-4 border border-gray-300 bg-white"
								onChange={handleChange}
							/>
							<input
								type="text"
								name="state"
								required
								placeholder="State *"
								className="w-full p-4 border border-gray-300 bg-white"
								onChange={handleChange}
							/>
							<input
								type="text"
								name="zipCode"
								required
								placeholder="ZIP Code"
								className="w-full p-4 border border-gray-300 bg-white"
								onChange={handleChange}
							/>
						</div>
						{/*Extra Contact Info*/}
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
										⚠️
										<span className="font-semibold"> Please note: </span> The
										email address you provide will serve as your secondary
										account number and will be used for identity verification
										and account recovery purposes.
									</p>
								</span>
							</span>
							<input
								type="text"
								name="phoneNumber"
								required
								placeholder="Phone number *"
								className="w-full p-4 border border-gray-300 bg-white"
								onChange={handleChange}
							/>

							<input
								type="text"
								name="email"
								required
								placeholder="Email Address *"
								className="w-full p-4 border border-gray-300 bg-white"
								onChange={handleChange}
							/>
							<input
								type="text"
								name="verifyEmail"
								required
								placeholder="Re-enter Email Address *"
								className="w-full p-4 border border-gray-300 bg-white"
								onChange={handleChange}
							/>
							<input
								type="text"
								name="password"
								required
								placeholder="Enter Password *"
								className="w-full p-4 border border-gray-300 bg-white"
								onChange={handleChange}
							/>
							<input
								type="text"
								name="verifyPassword"
								required
								placeholder="Re-enter Password *"
								className="w-full p-4 border border-gray-300 bg-white"
								onChange={handleChange}
							/>
						</div>
					</div>
					{/*Residency*/}
					<div className="relative flex flex-col items-start gap-6 pt-16 pb-8 w-full border-b border-black/30">
						<span className="absolute top-0 left-0 text-lg text-blue-500 w-full flex pt-2">
							<p>Residency</p>{" "}
							<span className="ml-auto text-primary-500">* required</span>
						</span>
						<div className="flex flex-col justify-start w-fit gap-2">
							<p>Are you a US Citizen ? *</p>
							<span className="flex gap-10">
								<label className="flex justify-start items-center gap-2 text-lg">
									<input
										type="radio"
										name="dualCitizen"
										required
										className="w-6 h-6"
										onChange={handleChange}
									/>
									<span>Yes</span>
								</label>
								<label className="flex justify-start items-center gap-2 text-lg">
									<input
										type="radio"
										name="dualCitizen"
										required
										className="w-6 h-6"
										onChange={handleChange}
									/>
									<span>No</span>
								</label>
							</span>
						</div>
						<input
							type="text"
							name="country"
							required
							placeholder="Country Of Residency *"
							className="w-full p-4 border border-gray-300 bg-white max-w-96"
							onChange={handleChange}
						/>
					</div>
					{/*Employment And Finances*/}
					<div className="relative flex flex-col items-start gap-6 pt-16 pb-8 w-full border-b border-black/30">
						<span className="absolute top-0 left-0 text-lg text-blue-500 w-full flex pt-2">
							<p>Employment & finances</p>{" "}
							<span className="ml-auto text-primary-500">* required</span>
						</span>
						<select
							name="employmentStatus"
							required
							className="w-full p-4 border border-gray-300 bg-white max-w-96"
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
							onChange={handleChange}
						/>
					</div>
					<div className="relative flex flex-col gap-6 pt-16 pb-8 w-full">
						<p>
							By selecting Continue, you authorize us to obtain a credit report
							or other report or account information from credit or information
							services agencies to help verify the information you provide in
							this application; for consideration of other accounts and
							services, and for any other lawful purpose. If your information
							does not meet certain qualifications, you will not be able to
							proceed with your application at this time.
						</p>
						<button className="bg-blue-500 text-white text-xl p-3 px-10 lg:w-fit">
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default page;
