export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <a href="/" className="text-2xl font-bold">
            PROBLEMBASE
          </a>
        </div>

        {/* Login Form */}
        <div className="border-2 border-black p-8">
          <h1 className="text-2xl font-bold text-center mb-8">WELCOME BACK</h1>

          <div className="space-y-4">
            <button className="w-full bg-black text-white py-3 border-2 border-black hover:bg-white hover:text-black">
              CONTINUE WITH GITHUB
            </button>

            <button className="w-full bg-white text-black py-3 border-2 border-black hover:bg-black hover:text-white">
              CONTINUE WITH GOOGLE
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="/register" className="underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
