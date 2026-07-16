import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import { getProperties } from '../api/api'
import './Home.css'

function Home() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProperties() {
      try {
        const data = await getProperties()
        setProperties(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    loadProperties()
  }, [])

  if (loading) {
    return <p className="loading">Chargement...</p>
  }

  if (error) {
    return <p className="error-message">{error}</p>
  }

  return (
    <div>
      <Banner
        image="/banner-home.jpg"
        title="Chez vous, partout et ailleurs"
      />
      <section className="home-grid">
        {properties.map(function (property) {
          return (
            <Card
              key={property.id}
              id={property.id}
              title={property.title}
              cover={property.cover}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Home
