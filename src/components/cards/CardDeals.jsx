import Button from "../ui/Button/Button.jsx";
import './CardDeals.scss'
const CardDeals = (props) => {

  const {
    prefix,
    title,
    description,
    bg
  } = props

  return (
    <div
      className="card-deals"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <p className="card-deals__prefix">
        {prefix}
      </p>
      <h3 className="card-deals__title">
        {title}
      </h3>
      <p className="card-deals__description">
        {description}
      </p>
      <Button
        className='card-deals__button'
        mode='transparent-white'
        location='deals'
        label='Explore Items'
      />
    </div>
  )
}

export default CardDeals