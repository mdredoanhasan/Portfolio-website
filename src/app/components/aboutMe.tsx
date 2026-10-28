const blocks = [
  {
    title: "My programming journey",
    text: "I’m a 3rd-semester Electronics and Communication Engineering student at the Institute of Science and Technology. My journey started with hardware: I built a digital billboard using an Arduino microcontroller, and watching code change something in the real world got me hooked. Now I’m learning full stack web development through Programming Hero and turning what I learn into projects like DevStack, Nature’s Platter, and Bazardor.",
  },
  {
    title: "Work I enjoy",
    text: "I enjoy turning ideas into clear, responsive interfaces and connecting them to reliable back ends. I’m especially interested in the details that make a product feel simple and useful.",
  },
  {
    title: "Outside of coding",
    text: "When I’m not building, I like to travel and see new places, watch football, and play video games. Travelling keeps me curious, football is my favourite way to unwind, and games taught me to enjoy solving problems and learning from every attempt.",
  },
  {
    title: "Always learning",
    text: "Every project is a chance to explore a new tool, understand a problem more deeply, and build something better than the last time.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#0a0a0f] px-4 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 py-16 sm:py-20 lg:flex-row lg:gap-16 lg:py-24">
        <div className="flex flex-col gap-5 lg:w-100 lg:shrink-0">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">About</p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            A little about me.
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-gray-400 sm:text-lg">
            Curious, hands-on, and always learning by building. I like
            understanding how things work, then making them better.
          </p>
        </div>

        <div className="flex flex-1 flex-col divide-y divide-white/8 rounded-3xl border border-white/10 bg-white/2.5">
          {blocks.map((b) => (
            <div key={b.title} className="flex flex-col gap-3 p-5 sm:p-8">
              <h3 className="text-lg font-semibold sm:text-xl">{b.title}</h3>
              <p className="max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}