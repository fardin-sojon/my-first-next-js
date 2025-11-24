
const features = [
  {
    title: "Add Products Easily",
    desc: "Quickly create new products with title, description, price, and optional image with a few clicks.",
  },
  {
    title: "Manage Inventory",
    desc: "Update, delete, or view all your products from a clean, responsive dashboard.",
  },
  {
    title: "Search & Filter",
    desc: "Find products quickly using search and category filters to save time.",
  },
];

export default function Features() {
  return (
    <section className="px-8 text-center">
      <h2 className="text-3xl font-bold mb-10">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition bg-white"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
