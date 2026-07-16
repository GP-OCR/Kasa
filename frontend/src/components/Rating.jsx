import './Rating.css'

function Rating(props) {
  const score = Number(props.rating)
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {stars.map(function (star) {
        let className = 'star'
        if (star <= score) {
          className = 'star star-filled'
        }
        return (
          <span key={star} className={className}>
            ★
          </span>
        )
      })}
    </div>
  )
}

export default Rating
