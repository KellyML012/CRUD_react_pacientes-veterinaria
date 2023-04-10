import { useState, useEffect } from "react"

import Formulario from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"

function App() {

  const initial = JSON.parse(localStorage.getItem('pacientes')) ?? []
  const [patients, setPatients] = useState(initial)
  const [patient, setPatient] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(patients))
  }, [patients])

  const deletePatient = id => {
    const updatePatient = patients.filter( patient => patient.id !== id)
    setPatients(updatePatient)
  }

  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className="mt-10 md:flex">
        <Formulario
          patients={patients} 
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
