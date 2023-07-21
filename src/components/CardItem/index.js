import './index.css'

const TechnologyCard = props => {
  const {cardDetails} = props
  const {title, description, className, imageUrl} = cardDetails

  return (
    <li className={`${className} card`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img className="image" src={imageUrl} alt={title} />
    </li>
  )
}

export default TechnologyCard
