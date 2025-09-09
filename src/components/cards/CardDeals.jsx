import Button from "../ui/Button/Button.jsx";
import './CardDeals.scss'
const CardDeals = () => {
  return (
    <div className="card-deals">
      <p className="card-deals__prefix">
        Low Price
      </p>
      <h3 className="card-deals__title">
        Breezy Summer
        Style
      </h3>
      <p className="card-deals__description">
        UPTO 50% OFF
      </p>
      <Button
        mode='transparent'
        location='deals'
        label='Explore Items'
      />
    </div>
  )
}

export default CardDeals