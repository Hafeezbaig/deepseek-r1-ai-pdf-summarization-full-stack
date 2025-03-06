import { useState } from 'react'
import SubscriptionButton from '../components/SubscriptionButton'

const Dashboard = () => {
  const [file, setFile] = useState<File | null>(null)
  const [summary, setSummary] = useState<string>('')
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Mock subscription handler
  const handleSubscribe = () => {
    setIsSubscribed(true)
  }

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0]
    if (uploadedFile?.type === 'application/pdf') {
      setFile(uploadedFile)
    }
  }

  // Mock analysis function
  const analyzePDF = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setSummary("Mock summary: This is a simulated summary of the PDF content. Key points include...")
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {!isSubscribed ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Premium Features</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to unlock PDF summarization capabilities
          </p>
          <SubscriptionButton onClick={handleSubscribe} />
        </div>
      ) : (
        <div className="space-y-8">
          <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="pdf-upload"
            />
            <label 
              htmlFor="pdf-upload"
              className="cursor-pointer text-purple-400 hover:text-purple-300"
            >
              {file ? file.name : 'Click to select PDF file'}
            </label>
          </div>

          <button
            onClick={analyzePDF}
            disabled={!file || isLoading}
            className={`w-full py-3 rounded-lg font-bold ${
              file ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-700 cursor-not-allowed'
            } text-white transition-colors`}
          >
            {isLoading ? 'Analyzing...' : 'Analyze PDF'}
          </button>

          {summary && (
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl text-white font-bold mb-4">Summary</h3>
              <p className="text-gray-300 whitespace-pre-wrap">{summary}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Dashboard