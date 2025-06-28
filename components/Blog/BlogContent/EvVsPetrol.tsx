// components/Blog/BlogContent/BudgetComparison.tsx
import Typography from "@/components/GradientText/Typography";

export default function EvVsPetrol() {
  return (
    <div>
      <Typography as="h2" variant="h4-medium-magistral" className="mb-4">
        EV vs Petrol Monthly Budgeting: How Crown Electric Mobility Helps You Save Big
      </Typography>

      <Typography variant="subtext-regular-jakarta" className="mb-4">
        Fuel prices in Pakistan are hitting new highs, and motorcyclists are feeling the pinch. Whether you commute for work or leisure, owning a petrol bike means a consistent monthly spend. Enter electric bikes—especially those by Crown Electric Mobility—offering a smarter, cost-effective alternative.
      </Typography>

      <Typography variant="subtext-regular-jakarta" className="mb-4">
        In this blog, we break down the monthly budgeting differences between petrol and electric motorcycles, showing how much you can save over time.
      </Typography>

      <Typography as="h3" variant="h5-medium-magistral" className="mt-6 mb-2">
        Petrol Bikes vs. Crown Electric Bikes – Monthly Running Cost Comparison
      </Typography>

      <Typography variant="subtext-regular-jakarta" className="mb-4">
        The biggest difference between petrol and electric bikes comes down to running cost. Let’s compare both based on standard usage assumptions:
      </Typography>

      <ul className="list-disc pl-6 space-y-1 mb-5">
        <li>Daily travel: 40 km</li>
        <li>Monthly travel: ~1,200 km</li>
        <li>Petrol price (June 2025): PKR 275/litre</li>
        <li>Petrol bike mileage: 40 km/litre</li>
        <li>Electricity rate: PKR 60/unit (kWh)</li>
        <li>EV energy consumption: 3.0 kWh per 100 km (average)</li>
      </ul>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Petrol Bike</th>
              <th className="border px-4 py-2">Crown Electric Bike</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Monthly Distance</td>
              <td className="border px-4 py-2">1,200 km</td>
              <td className="border px-4 py-2">1,200 km</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Fuel/Energy Needed</td>
              <td className="border px-4 py-2">30 litres</td>
              <td className="border px-4 py-2">36 units</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Fuel/Energy Cost</td>
              <td className="border px-4 py-2">PKR 8,250</td>
              <td className="border px-4 py-2">PKR 2,160</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Routine Maintenance</td>
              <td className="border px-4 py-2">PKR 1,200</td>
              <td className="border px-4 py-2">PKR 500</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Engine Oil Change</td>
              <td className="border px-4 py-2">PKR 600</td>
              <td className="border px-4 py-2">Not Required</td>
            </tr>
            <tr className="font-semibold">
              <td className="border px-4 py-2">Monthly Total Expense</td>
              <td className="border px-4 py-2">PKR 10,050</td>
              <td className="border px-4 py-2">PKR 2,660</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Typography variant="subtext-regular-jakarta" className="mb-6 font-semibold">
        Monthly Savings with Crown Electric Bike: ~PKR 7,400
      </Typography>

      <Typography as="h3" variant="h5-medium-magistral" className="mb-3">
        Crown Electric Mobility – Designed for Smart Commuters
      </Typography>
      <Typography variant="subtext-regular-jakarta" className="mb-5">
        Crown offers both Performance Series (LiFePO₄) and Legacy Series (Graphene) electric bikes—budget-friendly, efficient, and low-maintenance. Whether it’s the powerful Crown Markhor or stylish Crown Cherry, you escape fuel queues and rising costs.
      </Typography>

      <Typography as="h3" variant="h5-medium-magistral" className="mb-3">
        Real-World Example – Annual Savings at a Glance
      </Typography>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Item</th>
              <th className="border px-4 py-2">Petrol Bike</th>
              <th className="border px-4 py-2">Crown Electric Bike</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Total Running Cost</td>
              <td className="border px-4 py-2">PKR 120,600</td>
              <td className="border px-4 py-2">PKR 31,920</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Maintenance/Oil</td>
              <td className="border px-4 py-2">PKR 21,600</td>
              <td className="border px-4 py-2">PKR 6,000</td>
            </tr>
            <tr className="font-semibold">
              <td className="border px-4 py-2">Total Cost/Year</td>
              <td className="border px-4 py-2">PKR 142,200</td>
              <td className="border px-4 py-2">PKR 37,920</td>
            </tr>
            <tr className="text-green-600 font-semibold">
              <td className="border px-4 py-2">Annual Savings</td>
              <td colSpan={2} className="border px-4 py-2 text-center">PKR 104,280</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Typography as="h3" variant="h5-medium-magistral" className="mb-3">
        Maintenance Cost Comparison
      </Typography>

      <Typography variant="subtext-regular-jakarta" className="mb-5">
        While Crown electric bikes save on fuel, they also drastically cut down maintenance expenses:
      </Typography>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Component / Service</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Estimated Cost (PKR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Brake Pads</td>
              <td className="border px-4 py-2">Replacement after ~5,000–8,000 km</td>
              <td className="border px-4 py-2">300 – 800</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tyre Puncture</td>
              <td className="border px-4 py-2">Wear & tear / accidental damage</td>
              <td className="border px-4 py-2">200 – 2,500</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Suspension Check</td>
              <td className="border px-4 py-2">Alignment and tightening</td>
              <td className="border px-4 py-2">300 – 600</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">General Service</td>
              <td className="border px-4 py-2">Chain, O-ring, cleaning</td>
              <td className="border px-4 py-2">500 – 800</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Battery Diagnostics</td>
              <td className="border px-4 py-2">Optional 12–18 months check-up</td>
              <td className="border px-4 py-2">300 – 1,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Wiring Fixes</td>
              <td className="border px-4 py-2">Fuses or shorts</td>
              <td className="border px-4 py-2">200 – 1,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Typography variant="subtext-regular-jakarta" className="mb-4">
        <strong>What you don’t need:</strong> Engine oil, spark plugs, clutch plates, gears, fuel filters—none of that applies to electric bikes. Just ride and save.
      </Typography>

      <Typography variant="subtext-regular-jakarta" className="mb-8 font-semibold">
        Realistic Monthly Estimate: PKR 300–600/month for electric vs. PKR 1,500–2,000/month for petrol maintenance.
      </Typography>

      <Typography as="h3" variant="h5-medium-magistral" className="mb-3">
        Final Thoughts
      </Typography>

      <Typography variant="subtext-regular-jakarta" className="mb-4">
        Ready to break free from rising fuel bills? Crown Electric Mobility proves that electric isn’t just better for the planet—it’s better for your wallet too.
      </Typography>

      <Typography variant="subtext-regular-jakarta">
        Switch today and start saving tomorrow. Visit{" "}
        <a
          href="https://crownelectricmobility.com/"
          className="underline text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          crownelectricmobility.com
        </a>{" "}
        to explore your options.
      </Typography>
    </div>
  );
}
