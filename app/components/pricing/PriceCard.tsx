import { Pricing } from "@/app/lib/definitions";

export default function PriceCard({ cards }: { cards: Pricing[] }) {
  return (
    <div>
      {Array.isArray(cards) && cards.length > 0 ? (
          cards.map((card, index) => (
          <section key={index} className="grid md:grid-cols-2 text-left font-bigShot gap-x-2 mb-3 px-4 py-4 border-2 border-foreground border-spacing-3 rounded-lg">
              <div className="p-5 bg-gradient-to-r from-foreground via-accent2 to-foreground border-2 border-accent1 rounded-lg text-accent1">
              <h2 className="text-3xl">{card.price_level}</h2>
              <h3 className="text-2xl">${card.price_amount.toFixed(2)}</h3>
              <p>{card.price_description}</p>
              </div>
              <div className="pl-5">
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
  )
};