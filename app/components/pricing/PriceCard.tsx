import { Pricing } from "@/app/lib/definitions";

export default function PriceCard({ cards }: { cards: Pricing[] }) {
  return (
    <div>
      <h1 className="text-5xl text-center mb-6">Fee Schedule</h1>      
      <div>
        {Array.isArray(cards) && cards.length > 0 ? (
          cards.map((card, index) => (
            <section key={index} className="grid md:grid-cols-2 gap-x-2 mb-3 px-4 py-4 border-2 border-foreground border-spacing-3 rounded-lg">
              <div className="sm:border-b-2 sm:border-foreground sm:pb-5 md:border-r-2 md:border-foreground pr-5">
                <h2>{card.price_level}</h2>
                <h3>${card.price_amount.toFixed(2)}</h3>
                <p>{card.price_description}</p>
              </div>
              <div>
                <ul className="list-disc pl-8 my-2 space-y-2 text-left">
                {card.price_perks.map((perk, index) => (
                <li key={index} className="ml-2">{perk}</li>
              ))} 
                </ul>                
              </div>
            </section>
          ))
        ) : (
          <p>No pricing available.</p>
        )}
      </div>

    </div>
  )
};