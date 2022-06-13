// Importing useState from the main react modules
import { useState } from 'react'
// Importing styles.css from Folder /src/Home/styles.css
import './styles.css'
// Importing Card from the Folder /components
import { Card } from '../../components/Card/'

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  // Function to add the student onClick
  // Used on Div / Input at the end of code
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    // This function is used to put the data on the same
    // The (...) is called the "spread vector", used to add the previous state and then, on click, the other data.
      setStudents(prevState => [...prevState, newStudent]);
  }
 

  return (
    <div className='container'>
        <h1>Lista de presença:</h1>
        <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)} /> 
        <button type="button"
        onClick={handleAddStudent}>Adicionar</button>
        { 
        students.map(student =>  <Card name={student.name} time={student.time} />)

}

        </div>
  )
}

