import usaMap from "@svg-maps/usa";

const HIGHLIGHTED_IDS = new Set(["tx", "mo", "ky", "in", "al", "il", "sc", "tn", "ca"]);

const highlightedStateNames = [
  "California",
  "Texas",
  "Missouri",
  "Kentucky",
  "Indiana",
  "Alabama",
  "Illinois",
  "South Carolina",
  "Tennessee",
];

const contiguousStates = (usaMap.locations as { id: string; name: string; path: string }[]).filter(
  (loc) => loc.id !== "ak" && loc.id !== "hi"
);

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-[#F5F0E8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#8B6F47]/40" />
            <span className="text-[#8B6F47] text-xs font-semibold tracking-[0.35em] uppercase">
              Where We Work
            </span>
            <div className="h-px w-10 bg-[#8B6F47]/40" />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1C1410] leading-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Our Service Area
          </h2>
          <p className="mt-4 text-[#1C1410]/55 text-lg max-w-xl mx-auto">
            We are active buyers across nine states in the South, Midwest, and West.
          </p>
        </div>

        {/* Map + Legend */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* SVG Map */}
          <div className="w-full lg:flex-1">
            <svg
              viewBox={usaMap.viewBox}
              className="w-full drop-shadow-sm"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Map of the contiguous United States showing Saddleback Land Company service area"
            >
              {contiguousStates.map(({ id, name, path }) => {
                const isHighlighted = HIGHLIGHTED_IDS.has(id);
                return (
                  <path
                    key={id}
                    d={path}
                    fill={isHighlighted ? "#8B6F47" : "#E8D5B0"}
                    stroke="#F5F0E8"
                    strokeWidth="2"
                    opacity={isHighlighted ? 1 : 0.9}
                  >
                    <title>{name}</title>
                  </path>
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-sm bg-[#8B6F47] flex-shrink-0" />
              <span className="text-[#1C1410]/60 text-xs tracking-[0.2em] uppercase font-semibold">
                Active States
              </span>
            </div>
            <ul className="space-y-3">
              {highlightedStateNames.map((name) => (
                <li key={name} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8B6F47] flex-shrink-0" />
                  <span
                    className="text-[#1C1410]/80 text-base"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
