import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Collapse from '../frontend/src/components/Collapse'

describe('Collapse', () => {
  it('est fermé par défaut', () => {
    const { container } = render(
      <Collapse title="Description">Texte caché</Collapse>
    )
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(container.querySelector('.collapse-content')).not.toHaveClass('open')
  })

  it('affiche le contenu au clic', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Collapse title="Description">Texte révélé</Collapse>
    )
    await user.click(screen.getByRole('button'))
    expect(container.querySelector('.collapse-content')).toHaveClass('open')
    expect(screen.getByText('Texte révélé')).toBeInTheDocument()
  })

  it('referme le contenu au second clic', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Collapse title="Description">Texte bascule</Collapse>
    )
    const header = screen.getByRole('button')
    await user.click(header)
    expect(container.querySelector('.collapse-content')).toHaveClass('open')
    await user.click(header)
    expect(container.querySelector('.collapse-content')).not.toHaveClass('open')
  })
})
