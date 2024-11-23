import { motion, AnimatePresence } from 'framer-motion'

export default function Dashboard({ patients }) {
  const downloadFile = (fileData) => {
    const link = document.createElement('a')
    link.href = fileData.data
    link.download = fileData.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">Patient Records</h2>
      
      <div className="space-y-4">
        <AnimatePresence>
          {patients.length === 0 ? (
            <motion.p
              className="text-gray-500 text-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No patient records yet
            </motion.p>
          ) : (
            patients.map((patient) => (
              <motion.div
                key={patient.id}
                className="bg-gray-50 p-4 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                layout
              >
                <h3 className="font-semibold text-lg">{patient.name}</h3>
                <p className="text-gray-600">Age: {patient.age}</p>
                {patient.file && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      File: {patient.file.name}
                    </p>
                    <button
                      onClick={() => downloadFile(patient.file)}
                      className="mt-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Download File
                    </button>
                  </div>
                )}
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}