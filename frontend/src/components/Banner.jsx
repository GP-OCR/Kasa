import './Banner.css'

function Banner(props) {
  let style = {}
  if (props.image) {
    style.backgroundImage = 'url(' + props.image + ')'
  }

  return (
    <div className="banner" style={style}>
      <div className="banner-overlay"></div>
      {props.title ? <h1 className="banner-title">{props.title}</h1> : null}
    </div>
  )
}

export default Banner
