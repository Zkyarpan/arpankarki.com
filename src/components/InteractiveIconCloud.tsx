import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "vercel",
  "notion",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="flex w-full max-w-[50rem] h-full items-center justify-center overflow-hidden bg-white z-1">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
