import { styled } from '@stitches/react';

const Div = styled('div', {
  backgroundColor: '#231F3A',
  color: '#fff',
  textAlign: 'center',
  padding: '3px 20px',
  marginTop: '20px'
});

const Img = styled('img', {
  height: '100px',
  width: '100px'
});

export default function CardInfo({card}) {
  return (
    <Div>
      <Img src={card.photo} alt="Imagem do card" />
      <h2>{card.name}</h2>
      <h3>{card.city}</h3>
      <p>{card.description}</p>
    </Div>
  )
}