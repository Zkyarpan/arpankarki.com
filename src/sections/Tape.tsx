import StartIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Responsive",
  "Scalable",
  "Versatile",
  "Performance-centric",
  "Accessibility-focused",
  "Security-focused",
  "Responsive-focused",
  "Scalable-focused",
  "Versatile-focused",
  "Performance-centric-focused",
];

export const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]"
            style={{
              transform: "translateX(-750px)",
            }}
          >
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word, index) => (
                    <div key={index} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 font-serif font-extrabold text-sm -mx-1">
                        {word}
                      </span>
                      <StartIcon className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
