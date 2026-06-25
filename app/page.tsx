import { Brain, Briefcase, Heart, Compass, ShieldCheck, Lock, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F4F8FA] via-[#F7F9FB] to-white text-[#16213A]">
      {/* soft glow decoration */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#3CCFCF]/30 to-[#163A70]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-[40%] left-[-15%] h-[360px] w-[360px] rounded-full bg-[#3CCFCF]/15 blur-3xl" />

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-[#3CCFCF]/40 bg-[#E3F8F6]/80 px-4 py-2 text-sm font-medium text-[#163A70] shadow-sm backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3CCFCF] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3CCFCF]" />
          </span>
          Coming Soon
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-tight text-[#0E2B57] sm:text-6xl">
          Guidance When Life
          <br />
          <span className="bg-gradient-to-r from-[#163A70] to-[#3CCFCF] bg-clip-text text-transparent">
            Feels Uncertain.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[#5B6B82] sm:text-xl">
          UnTense connects you with verified psychologists, therapists, career
          coaches and relationship experts through secure audio, video and
          chat consultations — whenever you need them.
        </p>

        {/* Waitlist form */}
        <form className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[#E4EAF0] bg-white/80 px-5 py-3.5 text-sm text-[#16213A] placeholder-[#94A2B8] outline-none backdrop-blur transition focus:border-[#3CCFCF] focus:ring-2 focus:ring-[#3CCFCF]/30"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-[#163A70] to-[#2B5089] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#163A70]/20 transition hover:shadow-lg hover:shadow-[#163A70]/30 hover:-translate-y-0.5"
          >
            Join Waitlist
          </button>
        </form>
        <p className="mt-3 text-xs text-[#94A2B8]">
          No spam. We'll only email you when we launch.
        </p>

        <button className="mt-6 text-sm font-medium text-[#163A70] underline-offset-4 hover:underline">
          Become an Expert →
        </button>

        {/* What we offer */}
        <div className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
          {[
            { label: "Mental Health", icon: Brain },
            { label: "Career", icon: Briefcase },
            { label: "Relationships", icon: Heart },
            { label: "Life Coaching", icon: Compass },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#E4EAF0] bg-white/70 px-4 py-6 text-sm font-medium text-[#163A70] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E3F8F6] text-[#163A70]">
                <item.icon size={18} />
              </span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Why trust us */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#5B6B82]">
          <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#3CCFCF]" /> Verified experts</span>
          <span className="flex items-center gap-2"><Lock size={16} className="text-[#3CCFCF]" /> Private & secure</span>
          <span className="flex items-center gap-2"><Zap size={16} className="text-[#3CCFCF]" /> Instant consultation</span>
        </div>

        <p className="mt-16 text-xs text-[#94A2B8]">
          © 2026 UnTense. All rights reserved.
        </p>
      </section>
    </main>
  );
}
