import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionHeading = ({ children }: Props) => {
  return (
    <h2 className="bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase">
      {children}
    </h2>
  );
};

export default SectionHeading;
