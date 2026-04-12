import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Sparkle, Star, X } from "lucide-react";
import { getTestimonialsData } from "../api";

const cardLayouts = [
  "xl:col-span-6 min-h-[250px] md:min-h-[280px]",
  "xl:col-span-6 min-h-[250px] md:min-h-[280px]",
  "xl:col-span-3 min-h-[220px] md:min-h-[250px]",
  "xl:col-span-3 min-h-[220px] md:min-h-[250px]",
  "xl:col-span-3 min-h-[220px] md:min-h-[250px]",
  "xl:col-span-3 min-h-[220px] md:min-h-[250px]",
  "xl:col-span-3 min-h-[220px] md:min-h-[250px]",
  "xl:col-span-3 min-h-[220px] md:min-h-[250px]",
  "xl:col-span-3 min-h-[220px] md:min-h-[250px]",
  "xl:col-span-3 min-h-[220px] md:min-h-[250px]",
];

const cardThemes = [
  { cardClass: "bg-[#070B55] text-white border-[#070B55]", dark: true },
  { cardClass: "bg-white text-[#070B55] border-[#d7ddf7]", dark: false },
  { cardClass: "bg-[#0DBCC1] text-[#03272F] border-[#0DBCC1]", dark: false },
  { cardClass: "bg-[#EEF2FF] text-[#070B55] border-[#d8def7]", dark: false },
  { cardClass: "bg-[#070B55] text-white border-[#070B55]", dark: true },
  { cardClass: "bg-white text-[#070B55] border-[#d7ddf7]", dark: false },
  { cardClass: "bg-[#0DBCC1] text-[#03272F] border-[#0DBCC1]", dark: false },
  { cardClass: "bg-[#EEF2FF] text-[#070B55] border-[#d8def7]", dark: false },
  { cardClass: "bg-[#070B55] text-white border-[#070B55]", dark: true },
  { cardClass: "bg-white text-[#070B55] border-[#d7ddf7]", dark: false },
];

const getRatingValue = (ratingText) => {
  const parsed = Number.parseFloat(String(ratingText));
  if (!Number.isFinite(parsed)) return 0;
  return Math.max(0, Math.min(5, parsed));
};

export default function FullReview() {
  const [data, setData] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const response = await getTestimonialsData();
        setData(response);
      } catch (error) {
        console.error("Failed to load full reviews:", error);
      }
    }

    load();
  }, []);

  const reviews = useMemo(() => data?.fullReviews?.slice(0, 10) ?? [], [data]);

  useEffect(() => {
    if (!selectedReview) return undefined;

    const originalOverflow = document.body.style.overflow;
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        setSelectedReview(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscClose);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [selectedReview]);

  if (!data) {
    return (
      <section className="min-h-screen bg-[#F6F8FF] px-6 md:px-10 py-14">
        <div className="max-w-7xl mx-auto text-[#070B55] text-lg">Loading reviews...</div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F6F8FF] text-[#070B55] px-6 md:px-10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 w-[300px] overflow-hidden">
          <div className="animate-scrollText text-[15px] tracking-wide text-[#070B55] whitespace-nowrap flex gap-5">
            <span className="flex items-center gap-2">
              Top Reviews
              <Sparkle
                className="text-[#0DBCC1] w-5 h-5 animate-spin"
                style={{ animationDuration: "2.2s" }}
              />
            </span>
            <span className="flex items-center gap-2">
              Top Reviews
              <Sparkle
                className="text-[#0DBCC1] w-5 h-5 animate-spin"
                style={{ animationDuration: "2.2s" }}
              />
            </span>
          </div>
        </div>

        <h2
          className="mb-8 md:mb-10"
          style={{
            fontSize: "clamp(34px, 4.5vw, 48px)",
            fontWeight: 700,
            fontFamily: "Syne",
            color: "#000",
            lineHeight: "normal",
          }}
        >
          Top 10{" "}
          <span
            style={{
              color: "#0DBCC1",
              textDecoration: "underline",
              textDecorationThickness: "auto",
              textUnderlineOffset: "auto",
              textDecorationLine: "underline",
            }}
          >
            Reviews
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 md:gap-5">
          {reviews.map((review, index) => {
            const layout = cardLayouts[index] || "xl:col-span-3 min-h-[220px] md:min-h-[250px]";
            const theme = cardThemes[index % cardThemes.length];
            const isLargeCard = index < 2;
            const namePillClass = theme.dark
              ? "bg-white/15 border-white/30 text-white"
              : "bg-white/85 border-black/10 text-[#0f172a]";
            const arrowClass = theme.dark
              ? "border-white/45 text-white hover:bg-white hover:text-[#070B55]"
              : "border-black/20 text-[#0f172a] hover:bg-[#070B55] hover:text-white";
            const companyClass = theme.dark ? "text-white/80" : "text-[#334155]";

            return (
              <article
                key={review.name}
                className={`${theme.cardClass} ${layout} group relative rounded-[24px] p-5 md:p-6 border shadow-[0_10px_24px_rgba(7,11,85,0.10)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(7,11,85,0.18)] hover:border-[#a8b6ef]`}
              >
                <div
                  className={`${namePillClass} absolute top-5 left-5 z-20 inline-flex items-center rounded-xl px-3 py-1.5 text-xs md:text-sm border`}
                >
                  {review.name}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedReview(review)}
                  className={`${arrowClass} absolute top-5 right-5 z-30 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45`}
                  aria-label={`View full review by ${review.name}`}
                >
                  <ArrowUpRight size={18} />
                </button>

                <p
                  className={`pt-16 md:pt-20 pr-12 leading-[1.15] font-semibold ${
                    isLargeCard ? "text-[19px] md:text-[26px]" : "text-[17px] md:text-[21px]"
                  }`}
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: isLargeCard ? 4 : 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {review.summary}
                </p>

                <p className={`${companyClass} mt-auto pt-4 pr-12 text-sm md:text-base leading-snug`}>
                  {review.company}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      {selectedReview && (
        <div
          className="fixed inset-0 z-[120] bg-[#020617]/70 backdrop-blur-[2px] flex items-center justify-center p-4"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-white text-[#0f172a] rounded-[28px] w-full max-w-3xl p-6 md:p-8 relative shadow-2xl max-h-[92vh] overflow-y-auto border border-[#e2e8f0]"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setSelectedReview(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full border border-[#cbd5e1] flex items-center justify-center hover:bg-[#070B55] hover:text-white transition-colors"
              aria-label="Close review modal"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col md:flex-row gap-5 md:items-start">
              <img
                src={selectedReview.avatar}
                alt={selectedReview.name}
                className="w-24 h-24 rounded-2xl object-cover border border-[#dbe1ef] shadow-sm"
              />

              <div className="flex-1 min-w-0">
                <span className="inline-flex rounded-xl px-3 py-1.5 text-sm border border-[#dbe1ef] bg-[#f8fafc]">
                  {selectedReview.name}
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight mt-3">
                  {selectedReview.company}
                </h2>

                <div className="flex items-center gap-2 mt-3">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const fillStar = index < Math.round(getRatingValue(selectedReview.rating));
                    return (
                      <Star
                        key={index}
                        size={18}
                        className={fillStar ? "text-[#0DBCC1] fill-[#0DBCC1]" : "text-[#cbd5e1]"}
                      />
                    );
                  })}
                  <span className="text-sm md:text-base font-semibold text-[#070B55]">
                    {selectedReview.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#e2e8f0] my-6" />

            <p className="text-[#334155] text-lg md:text-xl leading-relaxed">
              {selectedReview.fullReview}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
