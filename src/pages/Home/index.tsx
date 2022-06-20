import { useEffect } from 'react'
// Importing useState from the main react modules  (HOOKS)
import { useState } from 'react'
// Importing styles.css from Folder /src/Home/styles.css
import './styles.css'
// Importing Card from the Folder /components
// Importing component CardProps from Card/Index.tsx
import { Card, CardProps } from '../../components/Card'

type ProfileResponse = {
  login: string,
  avatar_url: string,
}


type Login = {
  login: string,
  avatar: string,
}

//Export the function to main.jsx to render on front-end by DOM GETELEMENTBYID
export function Home() {
  const [studentName, setStudentName] = useState('');
  // Using CardProps from ./Card/index.tsx as ( Name, Time )
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<Login>({} as Login);
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
  // useEffect (Is activated whenever the page is rendered)
  // Used to call an API


  // This is the same that using an Assync Function with Away, inside the useEffect
  // fetch('https://api.github.com/users/matteothebrave')
  //.then(response => response.json())
  //.then(data => { 
  //  setUser({
  //    login: data.login,
  //     avatar: data.avatar_url,
  //  })
  //  })

  // Used to call an api with async function
 useEffect(() => {
  async function fetchData() {
    const response = await fetch('https://api.github.com/users/matteothebrave')
    const data = await response.json(); 
  
    setUser({
      login: data.login,
      avatar: data.avatar_url,
    })
  } 
  fetchData()
     
}, []); 

// Return is used to return all for front end
  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.login}</strong>
          <img src={user.avatar} alt="Foto do matteo" />
        </div>
        </header>
        <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)} /> 
        <button type="button"
        onClick={handleAddStudent}>Adicionar</button>
        { 
        // map is for repeteadly generate components 
        students.map(student => (<Card 
          // The Key (unique key) is used to generate an unique key for each component
          // Everytime a component is added generates an unique key.
          key={student.time}
          name={student.name}
          time={student.time}
           />
        ))

}

        </div>
  )
}

