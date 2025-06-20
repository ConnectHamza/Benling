"use client";

import Typography from "@/components/GradientText/Typography";
import HeroIMG from "../../../public/assets/Blogs/Crown-Electric-Mobility-Lithium-Iron-Phosphate-(LiFePO₄).webp";

export default function LiFePO4Blog() {
  return (
    <div className="space-y-6">
      <Typography as="h2" variant="h4-medium-magistral" className="mb-2">
        Why Lithium Iron Phosphate (LiFePO₄) Batteries Are Revolutionizing Pakistan’s Electric Mobility Sector
      </Typography>

      <Typography variant="subtext-regular-jakarta">
        Did you know Pakistan’s scorching summers could soon power your commute without a single drop of fuel? Meet LiFePO₄ batteries—the game-changer keeping your electric scooter cool, safe, and charged longer!
      </Typography>

      <img
        src={HeroIMG.src}
        alt="Crown Benling Performance Series"
        className="w-100 mx-auto my-4 block rounded-lg shadow-md"
      />

      <Typography id="lifepo4" as="h2" variant="h4-medium-magistral" className="mb-2">
        What Are LiFePO₄ Batteries?
      </Typography>
      <p className="font-jakarta">
        Lithium Iron Phosphate (LiFePO₄) batteries are a type of lithium-ion battery known for their exceptional safety, longevity, and thermal stability. Unlike conventional lead-acid or Nickel Manganese Cobalt (NMC) batteries, LiFePO₄ chemistry resists overheating and degradation, making it ideal for Pakistan’s extreme heat.
      </p>

      <Typography as="h3" variant="h4-medium-magistral" className="mb-2">
        Key Features of LiFePO₄ Batteries
      </Typography>
      <div className="overflow-auto">
        <table className="min-w-full table-auto text-left font-jakarta border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Feature</th>
              <th className="border px-4 py-2">LiFePO₄ Battery</th>
              <th className="border px-4 py-2">Lead-Acid Battery</th>
              <th className="border px-4 py-2">NMC Battery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Lifespan</td>
              <td className="border px-4 py-2">3,000–6,000 cycles</td>
              <td className="border px-4 py-2">300–500 cycles</td>
              <td className="border px-4 py-2">1,000–2,000 cycles</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Heat Tolerance</td>
              <td className="border px-4 py-2">Up to 300°C (safe)</td>
              <td className="border px-4 py-2">50°C (risk of damage)</td>
              <td className="border px-4 py-2">150°C (risk of fire)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Cost per kWh</td>
              <td className="border px-4 py-2">PKR 120,000–150,000</td>
              <td className="border px-4 py-2">PKR 60,000–80,000</td>
              <td className="border px-4 py-2">PKR 180,000–220,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Eco-Friendliness</td>
              <td className="border px-4 py-2">Non-toxic materials</td>
              <td className="border px-4 py-2">Toxic lead waste</td>
              <td className="border px-4 py-2">Rare-earth metals</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Typography as="h2" variant="h4-medium-magistral" className="mb-2">
        Why LiFePO₄ Works Best for Pakistan
      </Typography>
      <p className="font-jakarta">
        <h3 className="font-bold">1. Surviving Pakistan’s Extreme Heat</h3>
        Pakistan’s summers routinely hit 45°C+, crippling conventional batteries. LiFePO₄’s thermal stability ensures:<br />
        No overheating in cities like Multan (avg. summer temp: 42°C).<br />
        Longer range: Retains 90% efficiency vs. NMC’s 70% degradation at high temps.
      </p>

      <p className="font-jakarta">
       <h3 className="font-bold">2. Longer Lifespan = Lower Costs</h3>
        With 6,000+ charge cycles, LiFePO₄ batteries outlast lead-acid by 10x. For a daily commuter in Lahore (average ride: 30 km/day), this means:<br />
        LiFePO₄: Replace every 10+ years.<br />
        Lead-Acid: Replace every 1–2 years.
      </p>

      <p className="font-jakarta">
        <h3 className="font-bold">3. Safety First for Urban Commuters</h3>
        In Karachi’s congested traffic, LiFePO₄’s non-flammable design eliminates fire risks—a critical advantage over NMC batteries, which have caused global EV recalls.
      </p>

      <Typography id="performance-series" as="h2" variant="h4-medium-magistral" className="mb-2">
        Crown Benling’s Edge: Performance Series with LiFePO₄
      </Typography>
      <ul className="list-disc pl-5 font-jakarta space-y-2">
        <li>Enhanced Acceleration: 0–40 km/h in 5 seconds (ideal for Islamabad’s hills).</li>
        <li>Extended Range: 120 km/charge (even in Peshawar’s 40°C heat).</li>
        <li>Smart Features: NFC unlock, remote alarm system, and app-based diagnostics.</li>
      </ul>

      <Typography as="h2" variant="h4-medium-magistral" className="mb-2">
        Real-World Performance in Pakistani Cities
      </Typography>
      <div className="overflow-auto">
        <table className="min-w-full table-auto text-left font-jakarta border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">City</th>
              <th className="border px-4 py-2">Avg. Temp (°C)</th>
              <th className="border px-4 py-2">Battery Efficiency</th>
              <th className="border px-4 py-2">Range (km)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Multan</td>
              <td className="border px-4 py-2">42</td>
              <td className="border px-4 py-2">95%</td>
              <td className="border px-4 py-2">114</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Karachi</td>
              <td className="border px-4 py-2">38</td>
              <td className="border px-4 py-2">98%</td>
              <td className="border px-4 py-2">118</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Lahore</td>
              <td className="border px-4 py-2">40</td>
              <td className="border px-4 py-2">92%</td>
              <td className="border px-4 py-2">110</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Gilgit</td>
              <td className="border px-4 py-2">25</td>
              <td className="border px-4 py-2">100%</td>
              <td className="border px-4 py-2">120</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Typography id="future-of-ev" as="h2" variant="h4-medium-magistral" className="mb-2">
        The Future of EVs in Pakistan
      </Typography>
      <p className="font-jakarta">
        The government’s 2025 National Electric Mobility Policy aims to:<br />
        Convert 30% of vehicles to electric by 2030.<br />
        Offer tax exemptions for LiFePO₄ battery imports.<br />
        <br />
        Crown Benling is leading this shift, with its Multan showroom selling 500+ units/month—proving Pakistanis are ready for smarter, safer mobility.
      </p>

      <Typography as="h2" variant="h4-medium-magistral" className="mb-2">
        FAQs: Your LiFePO₄ Questions Answered
      </Typography>
      <ul className="list-disc pl-5 font-jakarta space-y-2">
        <li><b>Q:</b> Are LiFePO₄ batteries worth the price?<br /><b>A:</b> Yes! Despite higher upfront costs, their 10-year lifespan slashes long-term expenses by 60% vs. lead-acid.</li>
        <li><b>Q:</b> How do LiFePO₄ batteries handle monsoons?<br /><b>A:</b> Crown’s IP67-rated LiFePO₄ packs are waterproof, ensuring reliability even in Islamabad’s heavy rains.</li>
        <li><b>Q:</b> Is LiFePO₄ eco-friendly?<br /><b>A:</b> Absolutely! Recyclable materials and zero toxic emissions align with Pakistan’s green goals.</li>
      </ul>
    </div>
  );
}
