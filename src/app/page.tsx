import { Hero } from "@/components/home/hero";
import { MarqueeBand } from "@/components/home/marquee-band";
import { ProblemSolution } from "@/components/home/problem-solution";
import { ServicesIndex } from "@/components/home/services-index";
import { SelectedWork } from "@/components/home/selected-work";
import { Process } from "@/components/home/process";
import { ClientsStrip } from "@/components/home/clients-strip";
import { NumbersBand } from "@/components/home/numbers-band";
import { BigCta } from "@/components/home/big-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <ProblemSolution />
      <ServicesIndex />
      <SelectedWork />
      <Process />
      <ClientsStrip />
      <NumbersBand />
      <BigCta />
    </>
  );
}
