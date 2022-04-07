import card from '../../../public/card.json'
import './styles.css'

export default function Teste() {
  return (
    <div>
      <div className="pro">
        <h1>PRO</h1>
      </div>

      <img src={card.photo} alt="" />
      <h2>{card.name}</h2>
      <h3>{card.city}</h3>

      <h4>{card.description}</h4>

      <button className='primary'>Message</button>
      <button className='botao'>Following</button>

      <div className="skills">
        <h4>Skills</h4>
        {card.skills.map(skill => <button className='botao-secundario' key={skill}>{skill}</button>)}
      </div>
    </div>
  )
}