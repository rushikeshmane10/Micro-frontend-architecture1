export default function AboutSection() {
  return (
    <section className="mx-auto max-w-2xl p-6">
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-xl ring-1 ring-white/10">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 shrink-0 rounded-full bg-white/10 ring-1 ring-white/20" />
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-white">Hi, I’m Alex</h2>
            <p className="mt-1 text-sm text-slate-300">
              Front‑end dev who loves clean UI, fast UX, and shipping tiny details that make apps feel alive.
            </p>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <a
            href="#"
            className="rounded-xl px-3 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/10 active:scale-[0.99]"
          >
            View work
          </a>
          <a
            href="#"
            className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-white/90 active:scale-[0.99]"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}