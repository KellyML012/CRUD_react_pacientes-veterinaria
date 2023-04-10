import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario ({ patients, setPatients, patient, setPatient }) {
    const [petName, setPetName] = useState("")
    const [ownerName, setOwnerName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [symptoms, setSymptoms] = useState("")

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(patient).length > 0){
            setPetName(patient.petName)
            setOwnerName(patient.ownerName)
            setEmail(patient.email)
            setDate(patient.date)
            setSymptoms(patient.symptoms)
        }
    }, [patient])

    const idGenerator = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)

        return date + random
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación del Formulario
        if( [petName, ownerName, email, date, symptoms].includes('') ){
            setError(true)
            return
        }        
        setError(false)

        // Objeto de paciente
        const patientObject = {
            petName,
            ownerName,
            email,
            date,
            symptoms
        }

        if(patient.id){
            // Editando el resgitro
            patientObject.id = patient.id
            
            const updatedPatients = patients.map(patientState => patientState.id === patient.id ? patientObject : patientState)
            
            setPatients(updatedPatients)
            setPatient({})

        } else {
            // Nuevo registro
            patientObject.id = idGenerator()
            setPatients([...patients, patientObject])
        }        

        // Reinicio campos de formulario
        setPetName('')
        setOwnerName('')
        setEmail('')
        setDate('')
        setSymptoms('')
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 text-center mx-5">
            <h2 className="font-black text-3xl">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 mb-5">
                <span className="text-indigo-600 font-bold">Administra</span> y añade pacientes
            </p>

            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5 text-left mb-10"
            >
                { error && <Error><p>Todos los campos son obligatorios</p></Error> }

                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Nombre Mascota: </label>
                    
                    <input
                        id="pet"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={petName}
                        onChange={ (e) => setPetName(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Nombre propietario: </label>
                    
                    <input
                        id="owner"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ownerName}
                        onChange={ (e) => setOwnerName(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email: </label>
                    
                    <input
                        id="email"
                        type="email"
                        placeholder="Email del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="medical_discharge" className="block text-gray-700 uppercase font-bold">Alta: </label>
                    
                    <input
                        id="medical_discharge"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={ (e) => setDate(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Síntomas: </label>
                    
                    <textarea
                        id="symptoms"
                        placeholder="Describe los síntomas de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={symptoms}
                        onChange={ (e) => setSymptoms(e.target.value) }
                    />
                </div>

                <input
                    type="submit"
                    value={ patient.id ? "Editar Paciente" : "Agregar Paciente"} 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                />
            </form>
        </div>
    )
}

export default Formulario;