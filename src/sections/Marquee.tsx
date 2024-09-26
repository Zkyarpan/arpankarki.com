import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import SectionHeader from "@/components/SectionHeader";

const reviews = [
  {
    name: "Anjil",
    username: "@anjil",
    body: "Worked with him on a couple of projects. Always delivers what’s needed without fuss.",
    img: "https://avatars.githubusercontent.com/u/137144698?v=4",
  },
  {
    name: "Prabinzz",
    username: "@prabinzz",
    body: "He’s reliable and communicates well. Never had issues meeting deadlines.",
    img: "https://avatars.githubusercontent.com/u/17066166?v=4",
  },
  {
    name: "Taushif",
    username: "@taushif",
    body: "Understands what’s needed quickly and doesn’t overcomplicate things. Gets the job done.",
    img: "https://avatars.githubusercontent.com/u/112973122?v=4",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "No-nonsense approach. I appreciate that he keeps things efficient and to the point.",
    img: "https://avatars.githubusercontent.com/u/227909?v=4",
  },
  {
    name: "Benjamin",
    username: "@benjamin",
    body: "Straightforward and easy to work with. Always delivers what he promises.",
    img: "https://avatars.githubusercontent.com/u/51664?v=4",
  },
  {
    name: "Pratik",
    username: "@pratik",
    body: "Does exactly what’s needed, when it’s needed. I trust him with my projects.",
    img: "https://avatars.githubusercontent.com/u/107355273?v=4",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300",
        "bg-gray-800/80 hover:bg-gray-700/90",
        "border-gray-600 hover:border-gray-500"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full object-cover"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          {/* Use white for better contrast */}
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400">{username}</p>{" "}
          {/* Adjust for visibility */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>{" "}
      {/* Use white */}
    </figure>
  );
};

export function TestimonialsSection() {
  return (
    <>
      <SectionHeader
        eyebrow="People Saying"
        title="What People Are Saying"
        description="Don't just take my word for it. Here's what real people are saying about me"
      />
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  bg-[#111827] ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#111827] dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#111827] dark:from-background"></div>
      </div>
    </>
  );
}
