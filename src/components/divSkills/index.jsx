import { styled } from '@stitches/react';

const DivSkills = styled('div', {
  backgroundColor: '#1F1B36',
  color: '#fff',
  textAlign: 'justify',
  padding: '3px 20px',
});

export default ({children}) => <DivSkills>{children}</DivSkills>;