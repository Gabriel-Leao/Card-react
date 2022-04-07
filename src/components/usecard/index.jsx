import card from '../../../public/card.json'

export default function Teste() {
  return (
    <div>
      <h1>PRO</h1>

      <img src={card.photo} alt="" />
      <h2>O seu nome é {card.name}</h2>
      <h3>{card.city}</h3>

      <p>{card.description}</p>

      <button>Message</button>
      <button>Following</button>

      <h3>Skills</h3>
      {card.skills.map(skill => <button key={skill}>{skill}</button>)}
    </div>
  )
}