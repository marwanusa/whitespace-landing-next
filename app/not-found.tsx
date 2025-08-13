import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </main>
  );
}
