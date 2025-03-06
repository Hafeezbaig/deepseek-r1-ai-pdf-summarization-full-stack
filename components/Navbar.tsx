import Link from 'next/link'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-purple-400">
          <BeakerIcon className="h-6 w-6" />
          <span className="text-xl font-bold">PDFtoolAI</span>
        </Link>
        
        <div className="space-x-4">
          <Link href="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar