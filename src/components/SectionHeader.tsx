import React from "react";
interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  description: string;
}

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: SectionHeaderProps) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="font-semibold tracking-widest text-center text-transparent uppercase bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-6 font-serif text-3xl text-center md:text-5xl ">
        {title}
      </h2>
      <p className="max-w-md mx-auto mt-4 text-center md:text-lg lg:text-xl text-white/60">
        {description}
      </p>
    </>
  );
};
