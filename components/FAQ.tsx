"use client";

const QA = [
  {
    q: "What types of bookings is Lady in Red available for?",
    a: "Lady in Red is available for weddings, videos, photoshoots, private events, editorial concepts, and timeless drives. Send your date and idea by Instagram DM.",
  },
  {
    q: "Is the car available for weddings?",
    a: "Yes. The 560 SL is ideal for arrivals, exits, couple portraits, and wedding-day visuals. Availability can be checked by DM.",
  },
  {
    q: "Can we book it for photoshoots or music videos?",
    a: "Yes. The car is designed to bring cinematic presence to productions, editorials, music videos, and campaigns.",
  },
  {
    q: "Is it available outside Beirut?",
    a: "The brand is Beirut-based, with selected bookings possible across Lebanon depending on the date, location, and booking details. DM your location to check.",
  },
  {
    q: "How far in advance should we book?",
    a: "For weddings and production days, earlier is better. Send your date as soon as possible by Instagram DM.",
  },
  {
    q: "Can we decorate the car for a wedding?",
    a: "Styling requests can be discussed by DM. Any decoration should protect the car and match the classic look.",
  },
  {
    q: "Is pricing fixed?",
    a: "Pricing depends on the event type, date, duration, location, and production needs. Send the details by DM for a tailored quote.",
  },
  {
    q: "How do we confirm availability?",
    a: "Message @ladyinred.sl on Instagram with your date, event type, location, preferred time, and approximate duration.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-28 md:py-40 px-5 lg:px-10 bg-gradient-to-b from-ink via-burgundy/30 to-ink"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="eyebrow">— Questions</span>
          <h2 className="headline mt-5 text-[36px] md:text-5xl lg:text-[60px]">
            Quietly answered. <em>Politely premium.</em>
          </h2>
        </div>

        <div className="rounded-xl border border-gold/15 bg-espresso/40 backdrop-blur-sm overflow-hidden">
          {QA.map((item, i) => (
            <details key={i} className="faq-item border-b border-gold/10 last:border-0 group">
              <summary className="px-6 md:px-8 py-6 flex items-start justify-between gap-6 hover:bg-burgundy/20 transition-colors">
                <span className="font-serif text-lg md:text-xl text-cream pr-2">
                  {item.q}
                </span>
                <span className="faq-icon flex-shrink-0 mt-1 grid place-items-center w-8 h-8 rounded-full border border-gold/30 text-gold-light">
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-7 -mt-2">
                <p className="text-cream/75 text-[15px] leading-relaxed max-w-2xl">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        <p className="mt-10 text-center text-[12px] tracking-widest2 uppercase text-cream/55">
          Still have a question? Send us a DM on Instagram.
        </p>
      </div>
    </section>
  );
}
