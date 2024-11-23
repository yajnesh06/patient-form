import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function PatientForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    file: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = async (e) => {
    const { name, value, files } = e.target
    
    if (files && files[0]) {
      const file = files[0]
      const reader = new FileReader()
      
      reader.onload = (event) => {
        const fileData = {
          name: file.name,
          type: file.type,
          size: file.size,
          data: event.target.result
        }
        setFormData(prev => ({
          ...prev,
          [name]: fileData
        }))
      }
      
      reader.readAsDataURL(file)
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const patientData = {
        ...formData,
        id: Date.now()
      }
      
      // Store in localStorage
      const existingPatients = JSON.parse(localStorage.getItem('patients') || '[]')
      localStorage.setItem('patients', JSON.stringify([...existingPatients, patientData]))
      
      await onSubmit(patientData)
      toast.success('Patient information submitted successfully!')
      
      setFormData({ name: '', age: '', file: null })
    } catch (error) {
      toast.error('Error submitting patient information')
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-2xl font-semibold mb-8 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Patient Information
      </motion.h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all duration-200 px-3 py-2"
            placeholder="Enter patient name"
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            min="0"
            max="150"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all duration-200 px-3 py-2"
            placeholder="Enter patient age"
          />
        </div>

        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Medical Records
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2.5 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100
              transition-all duration-200"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </motion.button>
      </form>
    </motion.div>
  )
}