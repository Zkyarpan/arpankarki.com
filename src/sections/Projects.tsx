import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface ProjectCardProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden border border-gray-800/50 bg-gray-950/50 backdrop-blur-sm hover:border-gray-700/70 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 ease-out",
        className
      )}
    >
      <Link
        href={href || "#"}
        className="block h-40 w-full overflow-hidden"
        target="_blank"
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {image && !video && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </Link>

      <CardHeader className="p-4 pb-2">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
              {title}
            </CardTitle>
          </div>
          <time className="block text-xs text-gray-400">{dates}</time>
        </div>
      </CardHeader>

      <CardContent className="flex-grow p-4 pt-0">
        <Markdown className="prose prose-sm max-w-full prose-p:text-gray-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-strong:font-semibold dark:prose-invert">
          {description}
        </Markdown>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-3 p-4 pt-0">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags?.map((tag) => (
              <Badge
                className="bg-gray-800/70 hover:bg-gray-800 text-gray-300 px-2 py-0.5 text-[10px] font-medium"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="flex flex-wrap items-start gap-2 mt-1">
            {links?.map((link, idx) => (
              <Link
                href={link?.href}
                key={idx}
                target="_blank"
                className="no-underline"
              >
                <Badge
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-gradient-to-r from-emerald-500/80 to-sky-500/80 text-white hover:from-emerald-500 hover:to-sky-500 transition-colors"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
