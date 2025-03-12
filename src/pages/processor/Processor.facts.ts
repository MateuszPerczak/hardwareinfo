import { sample } from "lodash";

const cpuFacts = [
  "CPUs have a feature called 'Speculative Execution' that allows them to guess the future and run instructions ahead of time. Magic, or just clever computing?",
  "The smallest transistors in modern CPUs are only a few nanometers wide, roughly 100 times smaller than a human blood cell. Super tiny superheroes!",
  "CPUs often execute instructions out of order for efficiency, kind of like reading the end of a book before the middle. Spoiler alert!",
  "Ever heard of 'Throttling'? CPUs do it to slow themselves down when they get too hot. Even silicon needs to chill out sometimes.",
  "Modern CPUs can process trillions of operations per second. Imagine a dance party with trillions of moves in the blink of an eye.",
  "The latest CPUs have 'Turbo Boost' technology that temporarily increases their clock speed. It's like nitro for your processor!",
  "Quantum tunneling effects are a challenge in designing tiny transistors. Electrons just love playing peek-a-boo across barriers.",
  "CPUs use complex algorithms for branch prediction, trying to guess the future based on past behavior. Who needs a crystal ball?",
  "Some modern CPUs have over 20 billion transistors, each smaller than the tiniest bacteria. It's like a microscopic metropolis.",
  "Instruction pipelines in CPUs can be up to 30 stages deep. That's like having 30 assembly lines working in perfect harmony.",
];

export const getCpuFact = (): string => sample(cpuFacts) ?? "";
