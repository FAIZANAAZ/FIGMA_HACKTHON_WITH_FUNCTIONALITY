import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white mb-8">
      <h1 className="text-5xl font-extrabold mb-6 shadow-md shadow-gray-500">
        SORRY, PAGE NOT FOUND
      </h1>
      <p className="text-lg mb-8">PLEASE GO BACK TO</p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md shadow-blue-500 hover:bg-blue-700 transition text-center"
      >
        HOME PAGE
      </Link>
    </div>
  );
}
