import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      className="bg-white shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-6">
        <motion.h1 
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Healthcare Dashboard
        </motion.h1>
      </div>
    </motion.header>
  )
}