function Patient ( {patient, setPatient, deletePatient} ) {

    const { petName, ownerName, email, date, symptoms, id } = patient

    const handleDelete = () => {
        const answer = confirm("¿Deseas eliminar este paciente ?")

        if(answer){
            deletePatient(id)
        }
    }

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{petName}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{ownerName}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de alta: {''}
                <span className="font-normal normal-case">{date}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={ () => setPatient(patient) }
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Patient