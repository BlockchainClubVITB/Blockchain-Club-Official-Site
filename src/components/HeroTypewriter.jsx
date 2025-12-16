import { TypewriterEffectSmooth } from "./ui/typewriter-effect.tsx";
export function TypewriterEffectSmoothDemo() {
  const words = [
    // {
    //   text: "decentralise .",
    // },
    // {
    //   text: "connect .",
    // },
    // {
    //   text: "empower",
    // },
    {
      text: "Decentralise",
    },
    {
      text: ".",
      className: "text-accent dark:text-accent",
    },
    {
      text: "Connect",
    },
    {
      text: ".",
      className: "text-accent dark:text-accent",
    },
    {
      text: "Empower",
    },
    {
      text: ".",
      className: "text-accent dark:text-accent",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-fit  ">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-poppins">
        Blockchain Club
      </h1>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
