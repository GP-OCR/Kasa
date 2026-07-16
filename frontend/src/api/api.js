export async function getProperties() {
  const response = await fetch('/api/properties')

  if (!response.ok) {
    throw new Error('Impossible de charger les logements')
  }

  const data = await response.json()
  return data
}

export async function getProperty(id) {
  const response = await fetch('/api/properties/' + id)

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error('Impossible de charger le logement')
  }

  const data = await response.json()
  return data
}
