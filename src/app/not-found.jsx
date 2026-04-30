import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center min-h-[70vh] px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        
        {/* Error Code */}
        <p className="text-6xl font-black text-green-600">404</p>
        
        {/* Main Message */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Animal Not Found
        </h1>
        
        {/* Helper Text */}
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the animal or page you’re looking for. <br />
          It might have been adopted already! 🐾
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all"
          >
            Back to Home
          </Link>
          
          <Link 
            href="/all-animals" 
            className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors"
          >
            View All Animals <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

      </div>
    </main>
  );
};

export default NotFound;
