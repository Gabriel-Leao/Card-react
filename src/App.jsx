import Card from './components/card'
import { styled } from '@stitches/react'
import cardJson from '../public/card.json'

const DivApp = styled('div', {
  backgroundColor: '#28223E',
  height: '627px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
});

function App() {
  return (
    <DivApp>
      <Card card={cardJson}/>
    </DivApp>
  )
}

export default App
