import { useState } from 'react'
import './Collapse.css'

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }

  let contentClass = 'collapse-content'
  let chevronClass = 'collapse-chevron'
  if (isOpen) {
    contentClass = 'collapse-content open'
    chevronClass = 'collapse-chevron open'
  }

  return (
    <div className="collapse">
      <button type="button" className="collapse-header" onClick={toggle}>
        <span className="collapse-title">{props.title}</span>
        <svg
          className={chevronClass}
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M6 15l6-6 6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={contentClass}>
        <div className="collapse-inner">{props.children}</div>
      </div>
    </div>
  )
}

export default Collapse
