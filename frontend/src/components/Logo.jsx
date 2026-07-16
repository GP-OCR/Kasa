import './Logo.css'

function Logo(props) {
  let src = '/logo.svg'

  if (props.variant === 'white') {
    src = '/logo-white.svg'
  }

  return <img className="logo" src={src} alt="Kasa" />
}

export default Logo
