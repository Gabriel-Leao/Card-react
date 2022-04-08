import Card from './components/card'
import { styled } from '@stitches/react';

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
      <Card />
    </DivApp>
  )
}

export default App
