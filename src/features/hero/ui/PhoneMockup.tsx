import { MapPin, MessageCircle, QrCode, Navigation, Check } from 'lucide-react'

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px]">
      <div className="rounded-[2.6rem] border-[7px] border-brand-dark bg-brand-deep p-1 shadow-2xl shadow-brand-dark/30">
        <div className="relative h-[500px] overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-secondary to-white p-4 sm:h-[560px]">
          <div className="mx-auto mb-4 h-5 w-24 rounded-full bg-brand-deep" />
          <p className="text-xs text-muted-foreground">Bonjour 👋</p>
          <p className="mb-3 text-lg text-brand-deep">Quelle pharmacie est la plus proche ?</p>
          <div className="relative mb-3 h-36 overflow-hidden rounded-2xl bg-brand-mint/50">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(#1f857e33_1px,transparent_1px),linear-gradient(90deg,#1f857e33_1px,transparent_1px)] [background-size:24px_24px]" />
            <MapPin className="absolute top-8 left-10 size-7 fill-primary text-white" />
            <MapPin className="absolute top-14 right-12 size-9 fill-brand-dark text-white animate-bounce" />
            <Navigation className="absolute bottom-6 left-1/2 size-5 fill-brand-deep text-brand-deep" />
            <span className="absolute right-2 bottom-2 rounded-full bg-white px-2 py-0.5 text-[10px] text-brand-dark">Ouverte · 350 m</span>
          </div>
          <div className="mb-2 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
            <span className="grid size-9 place-items-center rounded-full bg-secondary text-primary"><MessageCircle className="size-4" /></span>
            <div className="text-xs"><p className="text-brand-deep">Doliprane 1g — disponible</p><p className="text-muted-foreground">Devis : 4 500 Ar</p></div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-primary p-3 text-white shadow-sm">
            <span className="grid size-9 place-items-center rounded-full bg-white/20"><Check className="size-4" /></span>
            <div className="text-xs"><p>Paiement confirmé</p><p className="text-white/80">MVola · Orange Money · Airtel</p></div>
          </div>
          <div className="mt-3 grid place-items-center rounded-2xl bg-white p-3 shadow-sm">
            <QrCode className="size-16 text-brand-deep" />
            <p className="mt-1 text-[10px] text-muted-foreground">Montrez ce code à la pharmacie</p>
          </div>
        </div>
      </div>
    </div>
  )
}
