import { WorkshopCard } from './WorkshopCard'

export default {
  title: 'Komponenter/Workshopkort',
  component: WorkshopCard,
  args: {
    title: 'Ta kontroll över din kamera',
    description: 'En workshop för vuxna nybörjare som vill komma vidare från autoläget.',
    href: '#boka',
  },
  argTypes: {
    title: { control: 'text', name: 'Rubrik' },
    description: { control: 'text', name: 'Beskrivning' },
    href: { control: 'text', name: 'Länk' },
  },
}

export const Standard = {}
export const LangRubrik = {
  name: 'Lång rubrik i smal vy',
  args: { title: 'Fotografera stadens människor och mötesplatser i vinterns sista kvällsljus' },
  decorators: [(Story) => <div style={{ maxWidth: '20rem' }}><Story /></div>],
}
