import card from '../../../public/card.json'
import PrimaryButton from '../buttons/primaryButton'
import SecundaryButton from '../buttons/secundaryButton'
import SkillsButton from '../buttons/skillsButton'
import DivSkills from '../divSkills'
import ProLabel from '../proLabel'
import './styles.css'

export default function Teste() {
  return (
    <div className='card'>
      <div>
        <ProLabel>pro</ProLabel>
      </div>

      <img src={card.photo} alt="" />
      <h2>{card.name}</h2>
      <h3>{card.city}</h3>

      <p>{card.description}</p>

      <PrimaryButton>Message</PrimaryButton>
      <SecundaryButton>Following</SecundaryButton>

      <DivSkills>
        <h3>Skills</h3>
        {card.skills.map(skill => <SkillsButton key={skill}>{skill}</SkillsButton>)}
      </DivSkills>
    </div>
  )
}