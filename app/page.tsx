import Link from 'next/link'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold text-white mb-6">
        AI-Powered PDF Summarization
      </h1>
      <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
        A modern AI-powered PDF summarizer that saves your time by extracting key insights from your PDFs.
      </p>
      <Link 
        href="/dashboard"
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
      >
        Get Started
      </Link>
    </div>
  )
}

export default Home