import './Deals.scss'
import CardDeals from "../../components/cards/CardDeals.jsx";

const Deals = () => {
  return (
    <div className="deals container">
      <CardDeals
        prefix="Low Price"
        title="High Coziness"
        description="UPTO 50% OFF"
        bg="src/assets/images/cards/deals-bg-1.jpg"
      />
      <CardDeals
        prefix="Beyoung Presents"
        title="Breezy Summer Style"
        description="UPTO 50% OFF"
        bg="src/assets/images/cards/deals-bg-2.jpg"
      />
    </div>
  )
}

export default Deals