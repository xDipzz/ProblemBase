export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <a href="/" className="text-2xl font-bold text-white">
            PROBLEMBASE
          </a>
        </div>

        {/* Register Form */}
        <div className="border-2 border-white p-8">
          <h1 className="text-2xl font-bold text-center mb-8">JOIN PROBLEMBASE</h1>

          <div className="space-y-4">
            <button className="w-full bg-white text-black py-3 border-2 border-white hover:bg-black hover:text-white">
              SIGN UP WITH GITHUB
            </button>

            <button className="w-full bg-black text-white py-3 border-2 border-white hover:bg-white hover:text-black">
              SIGN UP WITH GOOGLE
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/login" className="underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
