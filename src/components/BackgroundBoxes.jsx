import { Boxes } from "./ui/background-boxes.tsx";
import { cn } from "../utils/cn.ts";
import PropTypes from 'prop-types';

export function BackgroundBoxesDemo({ heading, subheading }) {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-200 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-6xl text-xl text-white relative z-20")}>
        {heading}
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        {subheading}
      </p>
    </div>
  );
}

BackgroundBoxesDemo.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};
