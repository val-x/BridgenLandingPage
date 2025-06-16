export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Test Page</h1>

        {/* Test regular Tailwind classes */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Regular Tailwind Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded">
              <p className="text-blue-800">
                This uses regular Tailwind classes
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded">
              <p className="text-green-800">This should work fine</p>
            </div>
          </div>
        </div>

        {/* Test CSS variables */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--navy-blue)" }}
          >
            CSS Variables Test
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="p-4 rounded"
              style={{ backgroundColor: "var(--green)", color: "white" }}
            >
              <p>This uses inline CSS variables</p>
            </div>
            <div
              className="p-4 rounded"
              style={{ backgroundColor: "var(--red)", color: "white" }}
            >
              <p>This should also work</p>
            </div>
          </div>
        </div>

        {/* Test list with topics */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Topics List Test
          </h2>
          <ul className="space-y-3">
            {["Topic 1", "Topic 2", "Topic 3"].map((topic, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
