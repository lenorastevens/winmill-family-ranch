import { Pricing } from "@/app/lib/definitions";
import PriceCard from "./PriceCard";

const pricingData: Pricing[] = [
  {
    price_level: 'Daily Rate',
    price_amount: 25,
    price_description: "Daily rate for those who can't visit very often.",
    price_perks: ['Pay Per Day', 'Small Financial Obligation', '' ],
  },
  {
    price_level: 'Basic Yearly Fee',
    price_amount: 250,
    price_description: 'Yearly fee that contributes to covering ranch upkeep and maintainance.',
    price_perks: ['Pay Once, Visit Anytime', 'Beneficial for Long Term Upkeep'],
  },
  {
    price_level: 'Vehicle Add On',
    price_amount: 25,
    price_description: 'Store a vehicle on the property.',
    price_perks: ['Vehicle Ready and Waiting for you', 'Optional to Share toys with Others'],
  },
]

export default function Fees() {
  return (
    <div>
      <div className="container mx-auto p-6 flex flex-col items-center text-center">
        <PriceCard cards={pricingData ?? [] } />
      </div>

    </div>
  )
}