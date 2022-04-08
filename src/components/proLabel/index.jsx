import { styled } from '@stitches/react'

const ProLabel = styled('span', {
  backgroundColor: '#FFC72C',
  fontSize: '15px',
  padding: '5px 15px',
  border: '0',
  borderRadius: '5px',
  color: 'black',
  textAlign: 'center',
  cursor: 'pointer',
  fontWeight: '800'
})

export default ({children}) => <ProLabel>{children.toUpperCase()}</ProLabel>;