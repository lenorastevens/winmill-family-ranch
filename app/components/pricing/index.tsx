import { Pricing } from "@/app/lib/definitions";
import PriceCard from "./PriceCard";

const pricingData: Pricing[] = [
  {
    price_level: 'Daily Rate',
    price_amount: 25,
    price_description: "Daily rate for those who can't visit very often.",
    price_perks: ['Pay Per Day', 'Small Financial Obligation' ],
  },
  {
    price_level: 'Base Ranch Fee',
    price_amount: 250,
    price_description: 'Yearly fee that contributes to covering ranch upkeep and maintainance.',
    price_perks: ['Pay Once, Visit Anytime', 'Beneficial for Long Term Upkeep'],
  },
  {
    price_level: 'Base Plus Car',
    price_amount: 300,
    price_description: 'Yearly fee plus store a vehicle on the property year round.',
    price_perks: ['Vehicle Ready and Waiting for you', 'Optional to Share toys with Others'],
  },
  {
    price_level: 'Base Plus Trailer',
    price_amount: 350,
    price_description: 'Yearly fee plus keep a trailer on the property year round.',
    price_perks: ['Always have a place of your own ready', 'No need to bring extra gear'],
  },
  {
    price_level: 'Base Plus Trailer and Vehicle',
    price_amount: 400,
    price_description: 'All the perks. A place of your own plus a vehicle waiting for you.',
    price_perks: ['Only need minimal gear', 'Fly in and enjoy'],
  },
]

export default function Fees() {
  return (
    <div>
      <div className="container mx-auto p-6 flex flex-col items-center text-center">
        <h1 className="text-5xl text-center mb-6">Fee Schedule</h1>
        <PriceCard cards={pricingData ?? [] } />
      </div>

    </div>
  )
}