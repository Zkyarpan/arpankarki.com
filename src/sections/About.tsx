import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavasctiptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CSS from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "../components/CardHeader";
import ToolboxItem from "@/components/ToolboxItem";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavasctiptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS",
    iconType: CSS,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Traveling",
    emoji: "✈️",
  },
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Music",
    emoji: "🎼",
  },
  {
    title: "Fitness",
    emoji: "⛹️‍♀️",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimps Into My World"
          description="Learn more about Who I am, and What I do, What inspires Me"
        />
        <div className="mt-20 flex flex-col gap-6">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="bookImage" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItem items={toolboxItems} className="mt-6" />
            <ToolboxItem
              items={toolboxItems}
              className="mt-6"
              itemsWrappeClassName="-translate-x-1/2"
            />
          </Card>
          <Card>
            <div>
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm"
              />
            </div>
            <div>
              {hobbies.map((item) => (
                <div key={item.title} className="">
                  <span>{item.title}</span>
                  <span>{item.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="mapImage" />
            <Image src={smileMemoji} alt="smiling memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
