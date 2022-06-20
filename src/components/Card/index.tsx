// Importing the CSS from this fold 
import './styles.css'
// type = setting a property of CardProps 
// both name and time MUST be string
export type CardProps = {
  name: string,
  time: string
}
// Exporting the function for src/pages/Home/index.jsx
export function Card(props: CardProps) {
  return(
      <div className="card">
        
        <strong>{props.name}</strong>
        <small>{props.time}</small>

      </div>

  )
}