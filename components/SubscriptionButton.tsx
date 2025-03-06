import { FC } from 'react'

interface SubscriptionButtonProps {
  onClick: () => void
}

const SubscriptionButton: FC<SubscriptionButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
    >
      Subscribe Now (Unlock Features)
    </button>
  )
}

export default SubscriptionButton