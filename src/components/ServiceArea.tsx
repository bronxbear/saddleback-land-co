const HIGHLIGHTED = new Set(["TX", "MO", "KY", "IN", "AL", "IL", "SC", "TN"]);

const statePaths: { id: string; name: string; path: string }[] = [
  // Northwest
  { id: "WA", name: "Washington", path: "M 110 62 L 192 62 L 205 85 L 213 115 L 173 128 L 110 120 Z" },
  { id: "OR", name: "Oregon", path: "M 108 122 L 213 118 L 208 148 L 198 232 L 108 232 Z" },
  { id: "ID", name: "Idaho", path: "M 198 78 L 250 78 L 256 118 L 258 158 L 236 172 L 205 172 L 198 148 Z" },
  { id: "MT", name: "Montana", path: "M 198 55 L 364 55 L 368 72 L 362 162 L 258 158 L 236 172 L 205 172 L 200 148 L 200 78 Z" },
  // West
  { id: "CA", name: "California", path: "M 105 232 L 198 228 L 192 282 L 178 348 L 158 428 L 128 448 L 98 415 L 92 325 Z" },
  { id: "NV", name: "Nevada", path: "M 198 168 L 254 158 L 265 200 L 254 358 L 198 360 L 192 285 Z" },
  { id: "UT", name: "Utah", path: "M 165 248 L 256 238 L 256 360 L 175 362 Z" },
  { id: "AZ", name: "Arizona", path: "M 172 362 L 258 358 L 268 465 L 218 478 L 178 468 L 162 435 L 168 395 Z" },
  // Northern Plains
  { id: "WY", name: "Wyoming", path: "M 256 158 L 364 152 L 368 248 L 262 250 Z" },
  { id: "CO", name: "Colorado", path: "M 262 250 L 368 245 L 374 338 L 268 340 Z" },
  { id: "NM", name: "New Mexico", path: "M 268 340 L 374 335 L 380 440 L 272 445 L 268 395 Z" },
  { id: "ND", name: "North Dakota", path: "M 352 55 L 514 55 L 516 78 L 514 148 L 354 148 Z" },
  { id: "SD", name: "South Dakota", path: "M 352 148 L 514 148 L 516 168 L 512 228 L 354 228 Z" },
  { id: "NE", name: "Nebraska", path: "M 352 228 L 512 225 L 514 250 L 512 302 L 395 302 L 358 292 Z" },
  { id: "KS", name: "Kansas", path: "M 355 298 L 512 295 L 514 368 L 358 368 Z" },
  { id: "OK", name: "Oklahoma", path: "M 355 368 L 512 362 L 550 365 L 554 398 L 512 402 L 396 408 L 358 405 L 358 382 Z" },
  // Texas (highlighted)
  { id: "TX", name: "Texas", path: "M 374 382 L 438 382 L 438 358 L 550 355 L 554 380 L 574 395 L 590 430 L 590 468 L 568 504 L 552 524 L 522 548 L 478 558 L 438 548 L 402 518 L 378 492 L 362 462 L 368 418 Z" },
  // Upper Midwest
  { id: "MN", name: "Minnesota", path: "M 504 55 L 610 55 L 616 80 L 598 158 L 558 188 L 508 198 L 505 172 L 514 142 Z" },
  { id: "IA", name: "Iowa", path: "M 504 198 L 558 192 L 605 198 L 612 218 L 608 268 L 504 268 Z" },
  // Missouri (highlighted)
  { id: "MO", name: "Missouri", path: "M 494 268 L 608 265 L 620 282 L 620 352 L 604 372 L 578 378 L 552 368 L 518 368 L 508 358 L 494 348 L 490 322 L 490 288 Z" },
  { id: "AR", name: "Arkansas", path: "M 492 368 L 604 362 L 608 368 L 612 432 L 502 438 L 492 418 Z" },
  { id: "LA", name: "Louisiana", path: "M 492 438 L 608 432 L 616 452 L 578 488 L 542 512 L 502 502 L 492 472 Z" },
  { id: "WI", name: "Wisconsin", path: "M 548 98 L 610 88 L 644 108 L 654 148 L 644 198 L 582 208 L 548 192 Z" },
  // Illinois (highlighted)
  { id: "IL", name: "Illinois", path: "M 558 208 L 634 208 L 636 262 L 634 308 L 620 342 L 598 348 L 572 338 L 558 308 L 555 268 Z" },
  { id: "MS", name: "Mississippi", path: "M 568 432 L 634 428 L 638 502 L 622 522 L 592 528 L 572 498 L 562 462 Z" },
  // Great Lakes
  { id: "MI_lower", name: "Michigan Lower", path: "M 630 168 L 700 165 L 705 222 L 690 270 L 650 274 L 630 260 Z" },
  { id: "MI_upper", name: "Michigan Upper", path: "M 594 98 L 660 92 L 700 115 L 705 142 L 650 152 L 594 148 Z" },
  // Indiana (highlighted)
  { id: "IN", name: "Indiana", path: "M 634 215 L 690 212 L 694 272 L 692 308 L 634 308 L 630 282 Z" },
  // Kentucky (highlighted)
  { id: "KY", name: "Kentucky", path: "M 620 285 L 760 278 L 765 298 L 760 325 L 744 350 L 700 360 L 644 360 L 620 348 L 618 318 Z" },
  // Tennessee (highlighted)
  { id: "TN", name: "Tennessee", path: "M 594 360 L 750 350 L 760 362 L 760 395 L 744 408 L 690 412 L 620 408 L 594 395 L 592 372 Z" },
  // Alabama (highlighted)
  { id: "AL", name: "Alabama", path: "M 610 405 L 680 398 L 684 448 L 684 494 L 660 518 L 634 522 L 610 508 L 596 478 L 598 438 Z" },
  { id: "OH", name: "Ohio", path: "M 680 195 L 760 188 L 774 235 L 768 282 L 730 288 L 694 272 L 680 242 Z" },
  { id: "WV", name: "West Virginia", path: "M 730 282 L 780 268 L 800 288 L 800 322 L 768 338 L 740 332 L 722 312 Z" },
  { id: "VA", name: "Virginia", path: "M 740 278 L 854 262 L 860 285 L 840 342 L 794 358 L 760 358 L 740 332 L 754 308 Z" },
  { id: "NC", name: "North Carolina", path: "M 724 358 L 840 342 L 874 362 L 864 402 L 794 418 L 740 422 L 724 392 Z" },
  // South Carolina (highlighted)
  { id: "SC", name: "South Carolina", path: "M 740 378 L 820 368 L 834 388 L 828 422 L 804 464 L 764 478 L 738 458 L 728 428 L 738 398 Z" },
  { id: "GA", name: "Georgia", path: "M 680 418 L 740 415 L 762 428 L 780 482 L 754 524 L 714 528 L 680 502 L 668 462 Z" },
  { id: "FL", name: "Florida", path: "M 674 518 L 730 522 L 760 542 L 794 578 L 740 592 L 690 582 L 660 558 L 640 528 Z" },
  // Northeast
  { id: "PA", name: "Pennsylvania", path: "M 754 212 L 854 202 L 860 228 L 854 272 L 760 282 L 748 258 Z" },
  { id: "NY", name: "New York", path: "M 760 158 L 875 142 L 900 168 L 882 218 L 854 222 L 754 232 L 748 202 Z" },
  { id: "VT", name: "Vermont", path: "M 875 132 L 895 128 L 905 152 L 900 198 L 880 202 L 875 168 Z" },
  { id: "NH", name: "New Hampshire", path: "M 895 128 L 915 122 L 920 148 L 916 198 L 900 198 L 895 162 Z" },
  { id: "ME", name: "Maine", path: "M 900 78 L 944 72 L 948 112 L 934 162 L 914 178 L 900 158 L 900 118 Z" },
  { id: "MA", name: "Massachusetts", path: "M 878 202 L 935 195 L 936 218 L 882 222 Z" },
  { id: "RI", name: "Rhode Island", path: "M 912 212 L 930 212 L 930 232 L 912 232 Z" },
  { id: "CT", name: "Connecticut", path: "M 882 218 L 912 212 L 912 232 L 888 238 Z" },
  { id: "NJ", name: "New Jersey", path: "M 854 235 L 875 228 L 879 270 L 858 280 L 845 258 Z" },
  { id: "DE", name: "Delaware", path: "M 858 270 L 878 265 L 878 290 L 860 294 Z" },
  { id: "MD", name: "Maryland", path: "M 780 272 L 854 262 L 860 285 L 836 302 L 800 308 L 776 292 Z" },
];

const highlightedStateNames = [
  "Texas",
  "Missouri",
  "Kentucky",
  "Indiana",
  "Alabama",
  "Illinois",
  "South Carolina",
  "Tennessee",
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-[#1C1410] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#C9A96E]/50" />
            <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.35em] uppercase">
              Where We Work
            </span>
            <div className="h-px w-10 bg-[#C9A96E]/50" />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Our Service Area
          </h2>
          <p className="mt-4 text-white/55 text-lg max-w-xl mx-auto">
            We are active buyers across eight states in the South and Midwest.
          </p>
        </div>

        {/* Map + Legend */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* SVG Map */}
          <div className="w-full lg:flex-1">
            <svg
              viewBox="88 50 865 548"
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Map of the United States showing Saddleback Land Company service area"
            >
              {statePaths.map(({ id, name, path }) => {
                const isHighlighted = HIGHLIGHTED.has(id.replace("_lower", "").replace("_upper", ""));
                return (
                  <path
                    key={id}
                    d={path}
                    fill={isHighlighted ? "#C9A96E" : "#2C1F14"}
                    stroke={isHighlighted ? "#1C1410" : "#3D2E20"}
                    strokeWidth={isHighlighted ? "1.5" : "1"}
                    opacity={isHighlighted ? 1 : 0.85}
                  />
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-sm bg-[#C9A96E] flex-shrink-0" />
              <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-semibold">
                Active States
              </span>
            </div>
            <ul className="space-y-3">
              {highlightedStateNames.map((name) => (
                <li key={name} className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-[#C9A96E] rounded-full flex-shrink-0" />
                  <span
                    className="text-white/80 text-base"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {name}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded-sm bg-[#2C1F14] border border-[#3D2E20] flex-shrink-0" />
                <span className="text-white/35 text-xs tracking-[0.2em] uppercase font-semibold">
                  Expanding Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
