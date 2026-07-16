import { Link } from 'react-router-dom'
import './Card.css'

function Card(props) {
  return (
    <Link to={'/logement/' + props.id} className="card">
      <img className="card-cover" src={props.cover} alt={props.title} />
      <h2 className="card-title">{props.title}</h2>
    </Link>
  )
}

export default Card
