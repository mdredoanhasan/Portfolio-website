import { FiBookOpen, FiCheckCircle } from "react-icons/fi";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="bg-[#0a0a0f] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
            Academic background
          </p>
          <h2
            id="education-title"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Education
          </h2>
        </div>

        <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#11111a]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-violet-600/10 blur-[90px]"
          />
          <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12 md:p-10">
            <div className="flex flex-col items-start">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <FiBookOpen size={24} aria-hidden="true" />
              </span>
              <span className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Current studies
              </span>
              <p className="mt-2 text-sm text-gray-300">
                Institute of Science and Technology, Dhanmondi
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-200">
                <FiCheckCircle aria-hidden="true" />
                Currently in 3rd semester
              </span>
            </div>

            <div className="border-t border-white/[0.08] pt-7 md:border-l md:border-t-0 md:pl-10 md:pt-1">
              <p className="text-sm font-medium text-violet-300">
                Bachelor&apos;s degree
              </p>
              <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
                Electronics and Communication Engineering
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                Building a foundation in electronics, communication systems,
                programming fundamentals, and embedded systems.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Electronics", "Communication systems", "Programming", "Embedded systems"].map(
                  (subject) => (
                    <span
                      key={subject}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300 sm:text-sm"
                    >
                      {subject}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}