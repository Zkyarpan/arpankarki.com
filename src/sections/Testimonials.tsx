import monday from "@/assets/images/monday.jpg";
import arpan1 from "@/assets/images/arpan1.jpg";
import Roxn from "@/assets/images/Roxn.jpg";
import rahul from "@/assets/images/rahul.jpg";
import suman from "@/assets/images/suman.jpg";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Mobin Tuner",
    position: "Marketing Manager @ TechStartups",
    text: "Arpan, despite being a student, made a significant impact on our website. His attention to detail and understanding of our brand were impressive. We're very pleased with the results!",
    avatar: monday,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Arpan was great. His skills as a software engineer brought our designs to life beyond our expectations. The end result was fantastic.",
    avatar: arpan1,
  },
  {
    name: "Rosan Kumal",
    position: "CEO @ InnovateCo",
    text: "Arpan's ability to create smooth user experiences is remarkable. We’ve seen a notable increase in conversions since the new design was launched. We’re very satisfied with his work.",
    avatar: Roxn,
  },
  {
    name: "Rahul Giri",
    position: "Product Manager @ GlobalTech",
    text: "Arpan is a skilled software engineer who turned our complex product into an intuitive interface. We've received great feedback from our users.",
    avatar: rahul,
  },
  {
    name: "Suman Limbu",
    position: "Director of IT @ MegaCorp",
    text: "Arpan’s work on our website has been outstanding. Even as a student, his skills and communication are excellent. We highly recommend him.",
    avatar: suman,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What clients say about me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((item) => (
                  <Card
                    key={item.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 bg-gray-800 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="w-14 h-14 bg-gray-700 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={56}
                          height={56}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {item.name}
                        </div>
                        <div className="text-sm text-white/60">
                          {item.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base text-white/80">
                      {item.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
