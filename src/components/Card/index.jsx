// Importing the CSS from this fold 
import './styles.css'
// Exporting the function for src/pages/Home/index.jsx
export function Card(props) {
  return(
      <div className="card">
        
        <strong>{props.name}</strong>
        <small>{props.time}</small>

      </div>

  )
}