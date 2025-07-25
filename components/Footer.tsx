import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Lock, CreditCard } from "lucide-react";

export default function BankingFooter() {
	return (
		<footer className="bg-slate-900 text-white">
			{/* Main Footer Content */}
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Banking Services */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-red-400">
							Banking Services
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/banking"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Open Accounts
								</Link>
							</li>
							<li>
								<Link
									href="/banking"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Accounts
								</Link>
							</li>
							{/*<li>
								<Link
									href="/loans"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Personal Loans
								</Link>
							</li>
							<li>
								<Link
									href="/mortgages"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Mortgages
								</Link>
							</li>
							 <li>
								<Link
									href="/credit-cards"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Credit Cards
								</Link>
							</li> */}
							<li>
								<Link
									href="/banking"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Business Banking
								</Link>
							</li>
						</ul>
					</div>

					{/* Support & Resources */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-red-400">
							Support & Resources
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/get-in-touch"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Help Center
								</Link>
							</li>
							<li>
								<Link
									href="/get-in-touch"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="/locations"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Branch Locations
								</Link>
							</li>
							<li>
								<Link
									href="/rates"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Current Rates
								</Link>
							</li>
							{/* <li>
								<Link
									href="/calculators"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Financial Calculators
								</Link>
							</li>
							<li>
								<Link
									href="/education"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Financial Education
								</Link>
							</li> */}
						</ul>
					</div>

					{/* About & Legal */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-red-400">
							About & Legal
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about/about-us"
									className="text-gray-300 hover:text-white transition-colors"
								>
									About Us
								</Link>
							</li>
							{/* <li>
								<Link
									href="/careers"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Careers
								</Link>
							</li> 
							<li>
								<Link
									href="/investors"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Investor Relations
								</Link>
							</li>*/}
							<li>
								<Link
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Accessibility
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Information */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-red-400">
							Get In Touch
						</h3>
						<div className="space-y-3">
							<div className="flex items-center space-x-3">
								<Phone className="h-4 w-4 text-red-400" />
								<span className="text-gray-300">1-800-BANKING</span>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="h-4 w-4 text-red-400" />
								<span className="text-gray-300">support@globetrust.com</span>
							</div>
							<div className="flex items-start space-x-3">
								<MapPin className="h-4 w-4 text-red-400 mt-1" />
								<span className="text-gray-300">
									123 Financial District
									<br />
									New York, NY 10004
								</span>
							</div>
						</div>

						{/* Mobile App Links */}
						{/* <div className="mt-6">
							<p className="text-sm text-gray-400 mb-2">Download Our App</p>
							<div className="flex space-x-2">
								<Link
									href="/app-store"
									className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-xs transition-colors"
								>
									App Store
								</Link>
								<Link
									href="/google-play"
									className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-xs transition-colors"
								>
									Google Play
								</Link>
							</div>
						</div> */}
					</div>
				</div>
			</div>

			{/* Security & Compliance Section */}
			<div className="border-t border-gray-700">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
						<div className="flex flex-wrap items-center justify-center lg:justify-start space-x-6 text-sm text-gray-400">
							<div className="flex items-center space-x-2">
								<Shield className="h-4 w-4" />
								<span>FDIC Insured</span>
							</div>
							<div className="flex items-center space-x-2">
								<Lock className="h-4 w-4" />
								<span>256-bit SSL Encryption</span>
							</div>
							<div className="flex items-center space-x-2">
								<CreditCard className="h-4 w-4" />
								<span>Equal Housing Lender</span>
							</div>
						</div>

						<div className="flex items-center space-x-4">
							<Link
								href="/security"
								className="text-gray-400 hover:text-white text-sm transition-colors"
							>
								Security Center
							</Link>
							<Link
								href="/fraud-protection"
								className="text-gray-400 hover:text-white text-sm transition-colors"
							>
								Fraud Protection
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="bg-gray-800 border-t border-gray-700">
				<div className="container mx-auto px-4 py-4">
					<div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
						<div className="flex items-center space-x-4">
							<div className="bg-red-600 text-white px-3 py-1 rounded font-semibold text-sm">
								GlobeTrust
							</div>
							<p className="text-gray-400 text-sm">
								© {new Date().getFullYear()} GlobeTrust Bank. All rights
								reserved.
							</p>
						</div>

						<div className="flex items-center space-x-4 text-xs text-gray-500">
							<span>Member FDIC</span>
							<span>•</span>
							<span>Equal Housing Opportunity</span>
							<span>•</span>
							<span>NMLS ID: 123456</span>
						</div>
					</div>
				</div>
			</div>

			{/* Important Disclaimers */}
			<div className="bg-gray-900 border-t border-gray-800">
				<div className="container mx-auto px-4 py-3">
					<p className="text-xs text-gray-500 text-center leading-relaxed">
						*Annual Percentage Yield (APY) accurate as of{" "}
						{new Date().toLocaleDateString()}. Rates subject to change. Minimum
						balance requirements may apply. FDIC insured up to $250,000 per
						depositor, per bank. GlobeTrust Bank is an Equal Housing Lender and
						Member FDIC.
					</p>
				</div>
			</div>
		</footer>
	);
}
