const items = [
  "Spoken English",
  "✦",
  "Grammar Mastery",
  "✦",
  "Free Hand Writing",
  "✦",
  "Board Exam Prep",
  "✦",
  "Reading Skills",
  "✦",
  "Writing Excellence",
  "✦",
  "Weekly Exams",
  "✦",
  "Monthly Tests",
  "✦",
  "PDF Materials",
  "✦",
  "Free Demo Classes",
  "✦",
  "Limited Batch Size",
  "✦",
  "Expert Instructor",
  "✦",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="py-5 bg-[#C9A84C] overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee-inner">
          {doubled.map((item, i) => (
            <span
              key={i}
              className={`inline-block mx-4 font-mono text-sm font-bold tracking-widest uppercase ${
                item === "✦" ? "text-[#0F1929]/40" : "text-[#0F1929]"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
