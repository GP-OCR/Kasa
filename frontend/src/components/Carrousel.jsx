import { useState } from 'react'
import './Carrousel.css'

function Carrousel(props) {
  const [index, setIndex] = useState(0)
  const pictures = props.pictures
  const total = pictures.length

  if (total === 0) {
    return null
  }

  function goPrev() {
    if (index === 0) {
      setIndex(total - 1)
    } else {
      setIndex(index - 1)
    }
  }

  function goNext() {
    if (index === total - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <div className="carrousel">
      <img
        className="carrousel-image"
        src={pictures[index]}
        alt={props.title}
      />

      {total > 1 ? (
        <>
          <button className="carrousel-arrow carrousel-left" onClick={goPrev}>
            ‹
          </button>
          <button className="carrousel-arrow carrousel-right" onClick={goNext}>
            ›
          </button>
          <p className="carrousel-counter">
            {index + 1}/{total}
          </p>
        </>
      ) : null}
    </div>
  )
}

export default Carrousel
