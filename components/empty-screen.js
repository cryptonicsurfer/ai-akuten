import { ArrowRightIcon } from "@heroicons/react/24/outline"
const exampleMessages = [
  {
    heading: 'Förklara AI-tjänster',
    message: `Vad är maskininlärning och hur kan det hjälpa mitt företag?`
  },
  {
    heading: 'Beskriv fördelar med AI',
    message: `Kan du ge exempel på hur AI kan effektivisera mina affärsprocesser?`
  },
  {
    heading: 'Boka ett möte',
    message: `Hur går jag tillväga för att boka ett introduktionsmöte med AI Akuten?`
  },
  {
    heading: 'Kostnad för AI-implementering',
    message: `Vilken typ av budget bör jag förvänta mig för att implementera AI i mitt företag?`
  },
  {
    heading: 'AI utan teknisk kunskap',
    message: `Jag har begränsad teknisk kunskap; kan jag ändå dra nytta av AI i mitt företag?`
  },
  {
    heading: 'Anpassning av AI-lösningar',
    message: `Hur skräddarsyr ni AI-lösningar för specifika branscher eller företagsstorlekar?`
  }
]
export function EmptyScreen({ setInput }) {
  return (
    <div className="mx-auto mt-5 max-w-2xl px-4">
      <div className="rounded-lg border border-gray-500 bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Välkommen till AI-akutens chattbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Det här är en chattbot som hjälper dig att se vad AI akuten kan hjälpa din verksamhet med.
        </p>
        <p className="leading-normal text-muted-foreground">
          Du kan påbörja en konversation här eller prova något av följande exempel:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <ArrowRightIcon className="inline-flex h-5 w-5 mr-2 text-muted-foreground" />
              {message.heading}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}