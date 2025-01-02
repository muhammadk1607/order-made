"use client";
import { useParams } from "next/navigation";

import Image from "next/image";
import subdomains from "../../../subdomains.json";

export default function LoginPage() {
  const params = useParams();
  const subdomain = params.subdomain;

  const subdomainData = subdomains.find((d) => d.subdomain === subdomain);

  if (!subdomain || !subdomainData) throw new Error("Invalid Subdomain");

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <Image
          src={subdomainData.logo}
          alt="Logo"
          width={120}
          height={120}
          className="mx-auto"
        />
        <h1 className="text-2xl font-semibold text-center mb-4 text-black">
          {subdomainData.title}
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
