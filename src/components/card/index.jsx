import card from '../../../public/card.json'
import PrimaryButton from '../buttons/primaryButton'
import SecundaryButton from '../buttons/secundaryButton'
import SkillsButton from '../buttons/skillsButton'
import CardInfo from '../info'
import ProLabel from '../proLabel'
import { styled } from '@stitches/react';

const DivCard = styled('div', {
  backgroundColor: '#231F3A',
  color: '#fff',
  height: '500px',
  width: '450px',
  borderRadius: '15px'
});

const DivPro = styled('div', {
  backgroundColor: '#231F3A',
  textAlign: 'justify'
})

const DivSkills = styled('div', {
  backgroundColor: '#1F1B36',
  color: '#fff',
  textAlign: 'justify',
  padding: '3px 20px',
  marginTop: '20px',
  borderBottomLeftRadius: '30px',
  borderBottomRightRadius: '30px'
});

export default function Card() {
  return (
    <DivCard>
      <DivPro>
        <ProLabel>pro</ProLabel>
      </DivPro>

      <CardInfo card={card}></CardInfo>

      <PrimaryButton>Message</PrimaryButton>
      <SecundaryButton>Following</SecundaryButton>

      <DivSkills>
        <h3>Skills</h3>
        {card.skills.map(skill => <SkillsButton key={skill}>{skill}</SkillsButton>)}
      </DivSkills>
    </DivCard>
  )
}