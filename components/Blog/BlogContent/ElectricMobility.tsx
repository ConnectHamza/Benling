"use client";

import Typography from "@/components/GradientText/Typography";
import HeroIMG from "../../../public/assets/Blogs/Crown-Electric-Mobility-Blog.webp";

/* ─────────────────────────────────────────────── */

export default function LiFePO4Blog() {
  return (
    <div className="space-y-6">
      {/* ── Intro ─────────────────────────────────── */}
      <Typography variant="h4-medium-magistral" className="mb-2">
        Why Crown Electric Mobility Performance Series Trusts Lithium&nbsp;LiFePO₄ Batteries for Exceptional EV Performance
      </Typography>

      <Typography variant="subtext-regular-jakarta">
        In the fast-paced evolution of electric mobility, reliable battery technology lies at the heart of every high‑performing electric vehicle. The Crown Electric Performance Series—featuring models like Markhor, Cherry, Champion, Raftaar, and Victory—leads the pack by integrating&nbsp;LiFePO₄ batteries, one of the safest and most efficient power solutions available today.
      </Typography>

      <img
        src={HeroIMG.src}
        alt="Crown Electric Performance Series"
        className="w-100 mx-auto my-4 block rounded-lg shadow-md"
      />

      {/* ── What is LiFePO₄? ───────────────────────── */}
      <Typography id="what-is-liFePO₄" variant="h4-medium-magistral" className="mb-2">
        What Is a&nbsp;LiFePO₄&nbsp;Battery?
      </Typography>
      <p className="font-jakarta">
        LiFePO₄ stands for <em>Lithium Iron Phosphate</em>, a lithium‑ion chemistry renowned for thermal
        stability, long service life, and consistent power delivery. Compared with traditional lead‑acid
        or older lithium‑ion cells, LiFePO₄ packs are lighter, safer, and far more durable—perfect for the rigorous demands of electric mobility.
      </p>


      {/* ── Key Advantages ─────────────────────────── */}
      <Typography id="advantages" variant="h4-medium-magistral" className="mb-2">
        Key Advantages of LiFePO₄
      </Typography>
      <ul className="list-disc pl-5 font-jakarta space-y-2">
        <li>
          <b>Enhanced Safety:</b> Superior thermal stability means a far lower risk of overheating,
          fire, or explosion compared with other lithium chemistries.
        </li>
        <li>
          <b>Longer Lifespan:</b> Up to <b>3,000‑5,000 charge cycles</b>—dramatically reducing replacement
          frequency and ownership costs.
        </li>
        <li>
          <b>Eco‑Friendly:</b> Free from rare or toxic metals; longer life equals less waste.
        </li>
        <li>
          <b>Consistent Power:</b> Flat‑voltage discharge curve delivers smooth, uninterrupted performance
          even under heavy load.
        </li>
      </ul>

      {/* ── LiFePO₄ vs. Other Chemistries ─────────── */}
      <Typography id="comparison" variant="h4-medium-magistral" className="mb-2">
        LiFePO₄ vs. Other Battery Technologies
      </Typography>
      <p className="font-jakarta">
        When stacked against lead‑acid and even emerging graphene packs, LiFePO₄ leads in safety,
        lifespan, and weight—all at a palatable cost and with mature supply chains.
      </p>
      <ul className="list-disc pl-5 font-jakarta space-y-2">
        <li><b>Lifespan:</b> LiFePO₄&nbsp;— 2,000–5,000 cycles • Graphene — 1,500–2,000 • Lead‑acid — 300–500</li>
        <li><b>Weight:</b> LiFePO₄ is the lightest of the three, boosting EV range and handling.</li>
        <li><b>Charging Time:</b> 4–5 h versus 6–8 h (graphene) and 8–12 h (lead‑acid).</li>
        <li><b>Safety & Maintenance:</b> “Very High” and “Low” for LiFePO₄—crucial for everyday riders.</li>
      </ul>


      {/* ── Performance Series Line‑up ─────────────── */}
      <Typography id="performance-series" variant="h4-medium-magistral" className="mb-2">
        Crown Electric Performance Series&nbsp;— At a Glance
      </Typography>

      <ul className="list-disc pl-5 font-jakarta space-y-2">
        <li><b>Markhor:</b> 3000 W • 72 V / 40 Ah • 90‑100 km/h • 90‑100 km range • Rs 380k</li>
        <li><b>Cherry:</b> 3000 W • 72 V / 40 Ah • 75‑80 km/h • 110‑130 km range • Rs 380k</li>
        <li><b>Champion:</b> 1200 W • 72 V / 60 Ah • 65‑70 km/h • 200‑220 km range • Rs 325k</li>
        <li><b>Raftaar:</b> 2000 W • 72 V / 40 Ah • 85‑90 km/h • 140‑160 km range • Rs 299k</li>
        <li><b>Victory:</b> 1000 W • 72 V / 30 Ah • 50‑55 km/h • 100‑120 km range • Rs 265k</li>
      </ul>

      {/* ── Conclusion ─────────────────────────────── */}
      <Typography variant="h4-medium-magistral" className="mb-2">
        Discover Smarter Mobility
      </Typography>
      <p className="font-jakarta">
        By standardising on LiFePO₄, Crown Electric delivers unmatched efficiency, safety, and sustainability across its Performance Series. Whether you’re eyeing the rugged Markhor or the value‑packed Victory, every ride is powered by chemistry engineered for the road ahead.
      </p>
    </div>
  );
}
