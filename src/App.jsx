import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import PatientForm from './components/PatientForm'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients') || '[]')
    setPatients(storedPatients)
  }, [])

  const handleSubmit = (formData) => {
    setPatients(prev => [...prev, formData])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PatientForm onSubmit={handleSubmit} />
          <Dashboard patients={patients} />
        </div>
      </main>
    </div>
  )
}

export default App