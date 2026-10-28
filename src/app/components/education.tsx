export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="bg-[#eef2f1] px-5 pb-20 pt-16 text-[#13242b] dark:bg-[#0e1a1f] dark:text-[#e6efed]"
    >
      <h2
        id="education-title"
        className="mx-auto mb-8 max-w-2xl text-[clamp(2rem,5vw,2.75rem)] font-bold leading-tight"
      >
        Education
      </h2>

      <article className="mx-auto max-w-2xl rounded-r-xl border-l-4 border-[#0f6b5c] bg-white py-6 pl-7 pr-6 dark:border-[#4cc3ac] dark:bg-[#152730]">
        <h3 className="text-[1.4rem] font-medium leading-snug">
          BSc in Electronics and Communication Engineering
        </h3>

        <p className="mb-3 mt-1 text-[#51656d] dark:text-[#9db3ba]">
          Institute of Science and Technology
        </p>

        <span className="mb-3 inline-block font-semibold text-[#0f6b5c] dark:text-[#4cc3ac]">
          Currently in 3rd semester · Expected graduation: [YEAR]
        </span>

        <p className="max-w-[60ch] leading-relaxed">
          Studying electronics, communication systems, programming
          fundamentals, and embedded systems.
        </p>
      </article>
    </section>
  );
}