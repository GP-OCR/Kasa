import './Host.css'

function Host(props) {
  return (
    <div className="host">
      <p className="host-name">{props.name}</p>
      <img className="host-picture" src={props.picture} alt={props.name} />
    </div>
  )
}

export default Host
