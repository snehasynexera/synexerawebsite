import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCaseStudiesData } from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectIndex, setProjectIndex] = useState(0);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [prevChapterData, setPrevChapterData] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const autoRef = useRef(null);

  // Load JSON
  useEffect(() => {
    async function load() {
      try {
        const data = await getCaseStudiesData();
        setProjects(data);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  // autoplay
  useEffect(() => {
    startAutoPlay();
    return () => clearTimeout(autoRef.current);
  }, [projectIndex, chapterIndex]);

  const startAutoPlay = () => {
    clearTimeout(autoRef.current);
    autoRef.current = setTimeout(() => nextChapter(), 7000);
  };

  const nextProject = () => {
    setChapterIndex(0);
    setProjectIndex((p) => (p + 1) % projects.length);
  };

  const prevProject = () => {
    setChapterIndex(0);
    setProjectIndex((p) => (p - 1 + projects.length) % projects.length);
  };

  const nextChapter = () => {
    const p = projects[projectIndex];
    if (!p) return;

    if (chapterIndex < p.chapters.length - 1) {
      triggerFlip(chapterIndex + 1);
    } else {
      triggerFlip(0, true);
    }
  };

  const goPrevChapter = () => {
    if (chapterIndex > 0) {
      triggerFlip(chapterIndex - 1);
    } else {
      triggerFlip(0, true, true);
    }
  };

  const triggerFlip = (newIndex, projectChange = false, backwards = false) => {
    if (!projects.length) return;

    // 1️⃣ Store old chapter (A) for the flipping page
    const oldChapter = projects[projectIndex].chapters[chapterIndex];
    setPrevChapterData(oldChapter);

    // 2️⃣ Update to new chapter (B) BEFORE animation starts
    if (projectChange && !backwards) {
        setChapterIndex(0);
        setProjectIndex((p) => (p + 1) % projects.length);
    } else if (projectChange && backwards) {
        setChapterIndex(0);
        setProjectIndex((p) => (p - 1 + projects.length) % projects.length);
    } else {
        setChapterIndex(newIndex);
    }

    // 3️⃣ Begin flip animation showing old chapter (A)
    setIsFlipping(true);

    // 4️⃣ End animation — do nothing else
    setTimeout(() => {
        setIsFlipping(false);
    }, 650);
    };


  if (!projects.length) return null;

  const chapter = projects[projectIndex].chapters[chapterIndex];
  const imageLeft = chapter.imagePosition === "left";

  return (
    <div className="w-full flex flex-col items-center gap-8 pb-16">

      <h2 className="text-4xl font-bold text-black py-10 tracking-wide">
        {projects[projectIndex].projectName}
      </h2>

      <div className="book-container">

        {/* STATIC PAGE */}
        <div className="page-static flex">
          {chapter.image && imageLeft && (
            <img
              src={chapter.image}
              className="w-1/2 h-[380px] object-cover rounded-2xl shadow-lg"
            />
          )}

          <div className="flex flex-col w-full">
            <p className="text-sm text-[#22F6F2] uppercase">{chapter.category}</p>
            <h3 className="text-3xl font-semibold text-[#071234] mt-2">
              {chapter.title}
            </h3>
            <p className="mt-4 text-gray-700 text-lg">{chapter.desc}</p>
          </div>

          {chapter.image && !imageLeft && (
            <img
              src={chapter.image}
              className="w-1/2 h-[380px] object-cover rounded-2xl shadow-lg"
            />
          )}
          
        </div>

        {/* TURNING PAGE */}
        {isFlipping && prevChapterData && (
          <div className="page-turn flex">
            {prevChapterData.image &&
              prevChapterData.imagePosition === "left" && (
                <img
                  src={prevChapterData.image}
                  className="w-1/2 h-[380px] object-cover rounded-2xl shadow-lg"
                />
              )}

            <div className="flex flex-col w-full">
              <p className="text-sm text-[#22F6F2] uppercase">
                {prevChapterData.category}
              </p>
              <h3 className="text-3xl font-semibold text-[#071234] mt-2">
                {prevChapterData.title}
              </h3>
              <p className="mt-4 text-gray-700 text-lg">
                {prevChapterData.desc}
              </p>
            </div>

            {prevChapterData.image &&
              prevChapterData.imagePosition !== "left" && (
                <img
                  src={prevChapterData.image}
                  className="w-1/2 h-[380px] object-cover rounded-2xl shadow-lg"
                />
              )}
          </div>
        )}

        {/* BUTTONS */}
        <button
          onClick={goPrevChapter}
          className="absolute left-[-100px] top-1/2 -translate-y-1/2 
            bg-[#071234] text-white p-3 rounded-full shadow-lg hover:bg-[#22F6F2] transition"
        >
          <ArrowLeft size={24} />
        </button>

        <button
          onClick={nextChapter}
          className="absolute right-[-100px] top-1/2 -translate-y-1/2 
            bg-[#071234] text-white p-3 rounded-full shadow-lg hover:bg-[#22F6F2] transition"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex gap-3 mt-4">
        {projects.map((_, idx) => (
          <div
            key={idx}
            onClick={() => {
              setChapterIndex(0);
              setProjectIndex(idx);
            }}
            className={`
              w-4 h-4 rounded-full cursor-pointer transition-all
              ${idx === projectIndex ? "bg-[#22F6F2]" : "bg-[#071234]/40"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
