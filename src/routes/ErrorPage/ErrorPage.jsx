function ErrorPage() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
          <a href="/" className="text-blue-500 hover:text-blue-700">
            Go back to Home
          </a>
        </div>
      </div>
    );
  }
  
  export default ErrorPage;
  