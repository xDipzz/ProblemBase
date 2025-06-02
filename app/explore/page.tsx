"use client"

export default function ExplorePage() {
  const problems = [
    {
      id: 1,
      title: "Better project management for remote teams",
      description: "Current tools are too complex and don't integrate well.",
      category: "PRODUCTIVITY",
    },
    {
      id: 2,
      title: "AI-powered code review assistant",
      description: "Automate code reviews to catch bugs early.",
      category: "AI",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="border-b-2 border-black p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            PROBLEMBASE
          </a>
          <div className="space-x-4">
            <a href="/explore" className="hover:underline font-bold">
              EXPLORE
            </a>
            <a href="/login" className="hover:underline">
              LOGIN
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">EXPLORE PROBLEMS</h1>

        <div className="space-y-6">
          {problems.map((problem) => (
            <div key={problem.id} className="border-2 border-black p-6">
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="mb-4">{problem.description}</p>
              <div className="flex justify-between items-center">
                <span className="border border-black px-2 py-1 text-sm">{problem.category}</span>
                <button className="bg-black text-white px-4 py-2 hover:bg-white hover:text-black border-2 border-black">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
