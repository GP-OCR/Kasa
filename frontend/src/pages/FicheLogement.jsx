import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Carrousel from '../components/Carrousel'
import Tag from '../components/Tag'
import Rating from '../components/Rating'
import Host from '../components/Host'
import Collapse from '../components/Collapse'
import { getProperty } from '../api/api'
import './FicheLogement.css'

function FicheLogement() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProperty() {
      try {
        const data = await getProperty(id)
        setProperty(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    loadProperty()
  }, [id])

  if (loading) {
    return <p className="loading">Chargement...</p>
  }

  if (error) {
    return <p className="error-message">{error}</p>
  }

  if (!property) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="fiche">
      <Carrousel pictures={property.pictures} title={property.title} />

      <div className="fiche-head">
        <div className="fiche-info">
          <h1 className="fiche-title">{property.title}</h1>
          <p className="fiche-location">{property.location}</p>
          <ul className="fiche-tags">
            {property.tags.map(function (tag) {
              return <Tag key={tag} label={tag} />
            })}
          </ul>
        </div>

        <div className="fiche-aside">
          <Host name={property.host.name} picture={property.host.picture} />
          <Rating rating={property.rating} />
        </div>
      </div>

      <div className="fiche-details">
        <Collapse title="Description">
          <p>{property.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {property.equipments.map(function (equipment) {
              return <li key={equipment}>{equipment}</li>
            })}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default FicheLogement
