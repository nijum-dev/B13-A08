import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center px-4">
            <div className="text-center space-y-6 max-w-lg">
                <div className="inline-block p-6 bg-red-50 rounded-full mb-4">
                    <FaExclamationTriangle className="text-6xl text-red-500 animate-pulse" />
                </div>
                <h1 className="text-6xl font-black text-[#104216]">404</h1>
                <h2 className="text-3xl font-bold text-gray-800">Page Not Found</h2>
                <p className="text-gray-500 font-medium text-lg">
                    The animal or page you're looking for has wandered off into another pasture. Let's get you back home.
                </p>
                <div className="pt-8">
                    <Link 
                        href="/" 
                        className="bg-[#104216] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#0d3512] transition-all inline-block"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
