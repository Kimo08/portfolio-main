import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import profile1 from "../public/profile{1}.svg";

const Hero = () => {
  return (
    <div className="pb-20 pt-7">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col md:flex-row items-center justify-center gap-12">
          <Image
            src={profile1}
            alt="profile image"
            style={{
              height: "300px",
              width: "300px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <div>
            <TextGenerateEffect
              words="Hi! I'm Kennedy, a Frontend Developer based in Nigeria."
              className="text-center  text-[40px] md:text-5xl lg:text-4xl"
            />

            <p className="text-center text-white md:tracking-wider mb-4 text-sm">
              I am a Frontend Developer with over a year of experience in the
              field. Throughout my career, I have had the priviledge of
              collaborating with prestigious organizations,contributing to their
              success and growth
            </p>
            <p className="text-center text-white md:tracking-wider mb-4 text-sm">
              My passion for web development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project
            </p>
            <div className="flex flex-row gap-6">
              <a
                href="#about"
                className="relative inline-flex h-12 w-full md:w-60  bg-black-200 text-white rounded-lg shadow-md md:mt-10 overflow-hidden p-[1px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 `}
                >
                  Show my work
                </span>
              </a>
              <a
                href="/Obasi Kennedy Ositadimma Resume {0}.pdf"
                download="Obasi_Kennedy_Resume.pdf"
                className="relative inline-flex h-12 w-full md:w-60  bg-black-200 text-white rounded-lg shadow-md md:mt-10 overflow-hidden p-[1px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 `}
                >
                  Download Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
