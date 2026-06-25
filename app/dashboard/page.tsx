"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Brain, Briefcase, Heart, GraduationCap, Users, HeartHandshake, Sparkles,
  ShieldCheck, Lock, Zap, Video, BadgePercent, EyeOff, Star, ChevronDown,
  ChevronLeft, ChevronRight, ArrowRight, Mic, Calendar, UserSearch,
  CalendarCheck, Smile, CloudRain, Waves, RefreshCw, MessageSquare,
  HeartCrack, Compass, Flame, Wallet, CheckCircle2, Menu, X, Activity
} from "lucide-react";

const CATEGORIES = [
  { label: "Stress", icon: Activity },
  { label: "Depression", icon: CloudRain },
  { label: "Anxiety", icon: Waves },
  { label: "Overthinking", icon: Brain },
  { label: "Career Guidance", icon: Briefcase },
  { label: "Job Change", icon: RefreshCw },
  { label: "Interview Prep", icon: MessageSquare },
  { label: "Marriage", icon: Heart },
  { label: "Love & Relationships", icon: HeartHandshake },
  { label: "Breakups", icon: HeartCrack },
  { label: "Family Issues", icon: Users },
  { label: "Student Counseling", icon: GraduationCap },
  { label: "Life Coaching", icon: Compass },
  { label: "Self Confidence", icon: Sparkles },
  { label: "Burnout", icon: Flame },
  { label: "Financial Stress", icon: Wallet },
];

const WHY = [
  { title: "Verified Experts", desc: "Every professional is licence-checked before they ever take a session.", icon: ShieldCheck },
  { title: "Private & Secure", desc: "End-to-end encrypted calls and chats. Nothing is ever recorded.", icon: Lock },
  { title: "Instant Consultation", desc: "Talk to someone within minutes, not weeks. No waiting rooms.", icon: Zap },
  { title: "Video, Audio or Chat", desc: "Show up however you're comfortable today. You choose the format.", icon: Video },
  { title: "Affordable Sessions", desc: "Transparent, pay-per-session pricing with no hidden fees.", icon: BadgePercent },
  { title: "Anonymous Support", desc: "Use a display name. Share only what you want to share.", icon: EyeOff },
];

const STEPS = [
  { n: "01", title: "Choose your expert", desc: "Filter by what you're facing, not just a job title — we match you to people who've helped others through it.", icon: UserSearch },
  { n: "02", title: "Book a session", desc: "Pick a time today or this week. Confirm in two taps, no forms to fill.", icon: CalendarCheck },
  { n: "03", title: "Feel better", desc: "Leave the session with a next step, not just a vent. Rebook only if it helps.", icon: Smile },
];

const EXPERTS = [
  { name: "Dr. Meera Shah", role: "Clinical Psychologist", exp: "12 yrs", rating: "4.9", initials: "MS", online: true },
  { name: "Rohan Verma", role: "Career Coach", exp: "8 yrs", rating: "4.8", initials: "RV", online: true },
  { name: "Dr. Aisha Khan", role: "Relationship Therapist", exp: "10 yrs", rating: "4.9", initials: "AK", online: false },
  { name: "Sandeep Rao", role: "Marriage Counselor", exp: "15 yrs", rating: "4.7", initials: "SR", online: true },
];

const TESTIMONIALS = [
  { quote: "I booked a session at midnight during a panic spiral and was talking to a real therapist in nine minutes. That speed mattered more than I expected.", name: "Priya, 27", role: "Member since 2025" },
  { quote: "I came in for career advice and ended up understanding why I was so anxious about every interview. My coach connected the dots I couldn't see myself.", name: "Arjun, 24", role: "Member since 2024" },
  { quote: "My husband and I tried marriage counselling three times before with no luck. The counselor we found here was the first one who actually got both of us talking.", name: "Neha & Karan", role: "Members since 2025" },
];

const FAQS = [
  { q: "Is everything I share actually private?", a: "Yes. Sessions are end-to-end encrypted and never recorded. You can also use a display name instead of your real one — your expert only sees what you choose to share." },
  { q: "How fast can I actually talk to someone?", a: "Most members are connected with an available expert in under 10 minutes for instant sessions. You can also schedule ahead if you'd rather plan." },
  { q: "What does a session cost?", a: "Pricing is shown upfront before you book — per session, no subscriptions or hidden charges. You only pay for the time you use." },
  { q: "What if my first expert isn't the right fit?", a: "You're free to switch any time. A lot of people try two or three experts before settling on someone they click with — that's normal, not a failure." },
  { q: "Can I cancel or reschedule a booked session?", a: "Yes, up to two hours before your session with no penalty. Life happens — we just ask for a little notice when you can give it." },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function UnTenseLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [testIndex, setTestIndex] = useState(0);
  const [faqOpen, setFaqOpen] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTestIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="ut-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .ut-root {
          --navy-900:#0E2B57; --navy:#163A70; --navy-600:#2B5089;
          --teal:#3CCFCF; --teal-400:#6FE0D6; --teal-100:#E3F8F6;
          --gold:#E8B870;
          --bg:#F7F9FB; --surface:#FFFFFF;
          --ink:#16213A; --ink-soft:#5B6B82; --ink-faint:#8E9DB3;
          --border:#E4EAF0;
          --r-lg:24px; --r-md:16px; --r-sm:10px;
          font-family:'Plus Jakarta Sans', sans-serif;
          color:var(--ink);
          background:var(--bg);
          overflow-x:hidden;
          position:relative;
        }
        .ut-root * { box-sizing:border-box; }
        .ut-root h1,.ut-root h2,.ut-root h3 { font-family:'Fraunces', serif; letter-spacing:-0.01em; margin:0; }
        .ut-root p { margin:0; }
        .ut-mono { font-family:'JetBrains Mono', monospace; }
        .ut-eyebrow {
          font-family:'JetBrains Mono', monospace; font-size:12.5px; letter-spacing:0.12em;
          text-transform:uppercase; color:var(--navy-600); font-weight:500;
          display:inline-flex; align-items:center; gap:8px;
        }
        .ut-eyebrow::before { content:''; width:6px; height:6px; border-radius:50%; background:var(--teal); display:inline-block; }

        .ut-soon-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:var(--teal-100); border:1px solid rgba(60,207,207,0.4);
          color:var(--navy-600); font-size:13px; font-weight:600;
          padding:8px 16px 8px 8px; border-radius:999px; margin-bottom:18px;
        }
        .ut-soon-badge .dot-wrap {
          width:22px; height:22px; border-radius:50%; background:var(--navy);
          display:flex; align-items:center; justify-content:center; position:relative; flex-shrink:0;
        }
        .ut-soon-badge .dot-wrap span { width:7px; height:7px; border-radius:50%; background:var(--teal); animation:pulseDot 2s infinite; }

        @keyframes breathe { 0%,100%{ transform:scale(1); opacity:0.5; } 50%{ transform:scale(1.09); opacity:0.85; } }
        @keyframes floatY { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-14px); } }
        @keyframes pulseDot { 0%,100%{ box-shadow:0 0 0 0 rgba(60,207,207,0.55); } 50%{ box-shadow:0 0 0 9px rgba(60,207,207,0); } }
        @keyframes waveBar { 0%,100%{ transform:scaleY(0.35); } 50%{ transform:scaleY(1); } }
        @keyframes marqueeFade { from{opacity:0; transform:translateX(16px);} to{opacity:1; transform:translateX(0);} }

        .ut-container { max-width:1180px; margin:0 auto; padding:0 28px; }
        .ut-section { padding:108px 0; }
        @media (max-width:720px){ .ut-section{ padding:72px 0; } .ut-container{ padding:0 20px; } }

        /* NAVBAR */
        .ut-nav {
          position:fixed; top:18px; left:0; right:0; z-index:100;
          display:flex; justify-content:center;
        }
        .ut-nav-inner {
          width:min(1080px, calc(100% - 32px));
          display:flex; align-items:center; justify-content:space-between;
          padding:13px 22px; border-radius:999px;
          background:rgba(255,255,255,0.6);
          border:1px solid rgba(255,255,255,0.5);
          backdrop-filter:blur(18px); -webkit-backdrop-filter:blur(18px);
          transition:all 0.35s ease;
          box-shadow:0 8px 30px rgba(22,58,112,0.06);
        }
        .ut-nav.scrolled .ut-nav-inner { background:rgba(255,255,255,0.86); box-shadow:0 10px 34px rgba(22,58,112,0.1); }
        .ut-logo { display:flex; align-items:center; gap:9px; font-family:'Fraunces',serif; font-weight:600; font-size:19px; color:var(--navy); }
        .ut-logo-mark { width:30px; height:30px; border-radius:9px; background:linear-gradient(135deg,var(--navy),var(--teal)); position:relative; flex-shrink:0; }
        .ut-logo-mark::after { content:''; position:absolute; inset:7px; border-radius:50%; border:2px solid rgba(255,255,255,0.85); }
        .ut-nav-links { display:flex; align-items:center; gap:30px; }
        .ut-nav-links a { color:var(--ink-soft); text-decoration:none; font-size:14.5px; font-weight:500; transition:color 0.2s; }
        .ut-nav-links a:hover { color:var(--navy); }
        .ut-nav-cta {
          background:linear-gradient(135deg,var(--navy),var(--navy-600));
          color:white; border:none; padding:10px 20px; border-radius:999px;
          font-size:14px; font-weight:600; cursor:pointer; transition:transform 0.2s, box-shadow 0.2s;
          box-shadow:0 6px 16px rgba(22,58,112,0.25);
        }
        .ut-nav-cta:hover { transform:translateY(-1px); box-shadow:0 8px 22px rgba(22,58,112,0.32); }
        .ut-nav-burger { display:none; background:none; border:none; cursor:pointer; color:var(--navy); }
        @media (max-width:880px){
          .ut-nav-links{ display:none; }
          .ut-nav-burger{ display:flex; }
        }
        .ut-mobile-menu {
          position:fixed; top:86px; left:16px; right:16px; z-index:99;
          background:rgba(255,255,255,0.97); border-radius:20px; padding:18px;
          display:flex; flex-direction:column; gap:14px; box-shadow:0 16px 40px rgba(22,58,112,0.18);
          border:1px solid var(--border);
        }
        .ut-mobile-menu a { color:var(--ink); text-decoration:none; font-weight:500; font-size:15px; }

        /* HERO */
        .ut-hero { padding:172px 0 100px; position:relative; }
        .ut-hero-grid { display:grid; grid-template-columns:1.05fr 0.95fr; gap:48px; align-items:center; }
        @media (max-width:980px){ .ut-hero-grid{ grid-template-columns:1fr; } .ut-hero{ padding:148px 0 64px; } }
        .ut-hero h1 { font-size:clamp(38px,5.2vw,62px); font-weight:600; line-height:1.06; color:var(--navy-900); margin:18px 0 22px; }
        .ut-hero-sub { font-size:17px; line-height:1.65; color:var(--ink-soft); max-width:470px; margin-bottom:34px; }
        .ut-hero-actions { display:flex; gap:14px; flex-wrap:wrap; margin-bottom:34px; }
        .ut-btn-primary {
          background:linear-gradient(135deg,var(--navy),var(--navy-600) 60%, var(--teal));
          color:white; border:none; padding:15px 26px; border-radius:14px;
          font-size:15px; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:8px;
          box-shadow:0 10px 26px rgba(22,58,112,0.28); transition:transform 0.2s, box-shadow 0.2s;
        }
        .ut-btn-primary:hover { transform:translateY(-2px); box-shadow:0 14px 32px rgba(22,58,112,0.34); }
        .ut-btn-ghost {
          background:rgba(22,58,112,0.05); color:var(--navy); border:1px solid var(--border);
          padding:15px 26px; border-radius:14px; font-size:15px; font-weight:600; cursor:pointer;
          transition:background 0.2s, border-color 0.2s;
        }
        .ut-btn-ghost:hover { background:rgba(22,58,112,0.09); border-color:var(--navy-600); }
        .ut-trust { display:flex; align-items:center; gap:10px; color:var(--ink-faint); font-size:13.5px; }
        .ut-avatars { display:flex; }
        .ut-avatars span { width:26px; height:26px; border-radius:50%; border:2px solid white; margin-left:-8px; background:linear-gradient(135deg,var(--navy-600),var(--teal)); }
        .ut-avatars span:first-child{ margin-left:0; }

        /* HERO VISUAL */
        .ut-hero-visual { position:relative; height:460px; display:flex; align-items:center; justify-content:center; }
        .ut-orb {
          position:absolute; width:360px; height:360px; border-radius:50%;
          background:radial-gradient(circle, rgba(60,207,207,0.45), rgba(22,58,112,0.18) 60%, transparent 75%);
          animation:breathe 6s ease-in-out infinite; filter:blur(2px);
        }
        .ut-main-card {
          position:relative; z-index:3; width:300px; background:rgba(255,255,255,0.72);
          border:1px solid rgba(255,255,255,0.8); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);
          border-radius:var(--r-lg); padding:22px; box-shadow:0 30px 60px rgba(22,58,112,0.18);
        }
        .ut-main-card-head { display:flex; align-items:center; gap:11px; margin-bottom:16px; }
        .ut-avatar-lg { width:42px; height:42px; border-radius:50%; background:linear-gradient(135deg,var(--navy),var(--teal)); display:flex; align-items:center; justify-content:center; color:white; font-weight:600; font-size:14px; }
        .ut-status-dot { width:8px; height:8px; border-radius:50%; background:var(--teal); animation:pulseDot 2s infinite; display:inline-block; margin-right:6px; }
        .ut-wave { display:flex; align-items:center; gap:3px; height:24px; margin:14px 0; }
        .ut-wave span { width:3px; background:var(--navy-600); border-radius:2px; height:100%; animation:waveBar 1.1s ease-in-out infinite; }
        .ut-wave span:nth-child(odd){ animation-delay:0.2s; background:var(--teal); }
        .ut-wave span:nth-child(3n){ animation-delay:0.4s; }
        .ut-timer { font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--ink-soft); display:flex; justify-content:space-between; align-items:center; }
        .ut-chip-float {
          position:absolute; z-index:4; background:rgba(255,255,255,0.85); backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,0.9); border-radius:14px; padding:10px 14px;
          font-size:12.5px; font-weight:600; color:var(--navy); box-shadow:0 14px 28px rgba(22,58,112,0.14);
          display:flex; align-items:center; gap:6px; animation:floatY 5s ease-in-out infinite;
        }
        .ut-chip-1 { top:6%; left:-6%; animation-delay:0s; }
        .ut-chip-2 { bottom:10%; right:-8%; animation-delay:1.2s; }
        .ut-chip-3 { bottom:-4%; left:8%; animation-delay:2.4s; }
        @media (max-width:560px){ .ut-chip-float{ display:none; } .ut-hero-visual{ height:380px; } }

        /* CATEGORY GRID */
        .ut-cat-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:48px; }
        @media (max-width:980px){ .ut-cat-grid{ grid-template-columns:repeat(3,1fr); } }
        @media (max-width:680px){ .ut-cat-grid{ grid-template-columns:repeat(2,1fr); } }
        .ut-cat-card {
          background:var(--surface); border:1px solid var(--border); border-radius:var(--r-md);
          padding:22px 18px; display:flex; flex-direction:column; gap:12px; cursor:default;
          transition:transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .ut-cat-card:hover { transform:translateY(-5px); box-shadow:0 18px 34px rgba(22,58,112,0.1); border-color:var(--teal-400); }
        .ut-cat-icon { width:42px; height:42px; border-radius:12px; background:var(--teal-100); color:var(--navy); display:flex; align-items:center; justify-content:center; transition:transform 0.25s ease; }
        .ut-cat-card:hover .ut-cat-icon { transform:rotate(-6deg) scale(1.06); background:linear-gradient(135deg,var(--navy),var(--teal)); color:white; }
        .ut-cat-card span { font-weight:600; font-size:14.5px; }

        /* SECTION HEAD */
        .ut-sec-head { max-width:600px; margin-bottom:8px; }
        .ut-sec-head h2 { font-size:clamp(28px,3.4vw,40px); font-weight:600; color:var(--navy-900); margin:14px 0 14px; }
        .ut-sec-head p { color:var(--ink-soft); font-size:16px; line-height:1.6; }

        /* WHY GRID */
        .ut-why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:46px; }
        @media (max-width:880px){ .ut-why-grid{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:560px){ .ut-why-grid{ grid-template-columns:1fr; } }
        .ut-why-card { background:var(--surface); border:1px solid var(--border); border-radius:var(--r-md); padding:28px; transition:box-shadow 0.25s, transform 0.25s; }
        .ut-why-card:hover { box-shadow:0 16px 32px rgba(22,58,112,0.08); transform:translateY(-3px); }
        .ut-why-icon { width:46px; height:46px; border-radius:13px; background:linear-gradient(135deg,var(--navy-100,#EAF0F8),white); display:flex; align-items:center; justify-content:center; color:var(--navy); margin-bottom:16px; border:1px solid var(--border); }
        .ut-why-card h3 { font-size:17px; font-weight:600; margin-bottom:8px; color:var(--ink); }
        .ut-why-card p { font-size:14.5px; color:var(--ink-soft); line-height:1.55; }

        /* STEPS */
        .ut-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:50px; position:relative; }
        @media (max-width:880px){ .ut-steps{ grid-template-columns:1fr; } }
        .ut-step { position:relative; padding:30px 24px; border-radius:var(--r-md); background:var(--surface); border:1px solid var(--border); }
        .ut-step-n { font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--teal-400); font-weight:600; }
        .ut-step-icon { width:48px; height:48px; border-radius:50%; background:var(--navy); color:white; display:flex; align-items:center; justify-content:center; margin:14px 0 16px; }
        .ut-step h3 { font-size:18px; font-weight:600; margin-bottom:8px; }
        .ut-step p { font-size:14.5px; color:var(--ink-soft); line-height:1.55; }

        /* EXPERTS */
        .ut-expert-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-top:46px; }
        @media (max-width:980px){ .ut-expert-grid{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width:560px){ .ut-expert-grid{ grid-template-columns:1fr; } }
        .ut-expert-card { background:var(--surface); border:1px solid var(--border); border-radius:var(--r-md); padding:22px; transition:transform 0.25s, box-shadow 0.25s; }
        .ut-expert-card:hover { transform:translateY(-4px); box-shadow:0 18px 34px rgba(22,58,112,0.1); }
        .ut-expert-top { display:flex; align-items:center; gap:12px; margin-bottom:14px; }
        .ut-expert-avatar { width:50px; height:50px; border-radius:50%; background:linear-gradient(135deg,var(--navy),var(--teal)); color:white; display:flex; align-items:center; justify-content:center; font-weight:600; position:relative; }
        .ut-online-dot { width:10px; height:10px; border-radius:50%; background:#39C98C; border:2px solid white; position:absolute; bottom:-2px; right:-2px; }
        .ut-expert-card h3 { font-size:15.5px; font-weight:600; }
        .ut-expert-card .role { font-size:13px; color:var(--ink-soft); }
        .ut-expert-meta { display:flex; align-items:center; gap:14px; font-size:13px; color:var(--ink-soft); margin-bottom:14px; }
        .ut-rating { display:flex; align-items:center; gap:4px; color:var(--gold); font-weight:600; }
        .ut-badge-avail { display:inline-flex; align-items:center; gap:6px; background:var(--teal-100); color:var(--navy-600); font-size:11.5px; font-weight:600; padding:5px 10px; border-radius:999px; margin-bottom:14px; }
        .ut-book-btn { width:100%; background:var(--navy); color:white; border:none; padding:11px; border-radius:11px; font-weight:600; font-size:13.5px; cursor:pointer; transition:background 0.2s; }
        .ut-book-btn:hover { background:var(--navy-600); }

        /* TESTIMONIALS */
        .ut-test-wrap { margin-top:48px; max-width:720px; margin-left:auto; margin-right:auto; text-align:center; position:relative; }
        .ut-test-quote { font-family:'Fraunces',serif; font-size:clamp(19px,2.4vw,25px); font-weight:400; line-height:1.5; color:var(--navy-900); min-height:140px; animation:marqueeFade 0.5s ease; }
        .ut-test-name { margin-top:22px; font-weight:600; font-size:14.5px; }
        .ut-test-role { font-size:13px; color:var(--ink-faint); }
        .ut-test-dots { display:flex; justify-content:center; gap:8px; margin-top:24px; }
        .ut-test-dots button { width:8px; height:8px; border-radius:50%; border:none; background:var(--border); cursor:pointer; padding:0; transition:background 0.2s, width 0.2s; }
        .ut-test-dots button.active { background:var(--teal); width:22px; border-radius:5px; }

        /* FAQ */
        .ut-faq { max-width:720px; margin:46px auto 0; }
        .ut-faq-item { border-bottom:1px solid var(--border); padding:20px 0; cursor:pointer; }
        .ut-faq-q { display:flex; justify-content:space-between; align-items:center; font-weight:600; font-size:15.5px; color:var(--ink); }
        .ut-faq-q svg { transition:transform 0.25s ease; color:var(--ink-faint); flex-shrink:0; }
        .ut-faq-a { font-size:14.5px; color:var(--ink-soft); line-height:1.6; max-height:0; overflow:hidden; transition:max-height 0.3s ease, opacity 0.3s ease, margin-top 0.3s ease; opacity:0; }
        .ut-faq-item.open .ut-faq-a { max-height:160px; opacity:1; margin-top:12px; }
        .ut-faq-item.open .ut-faq-q svg { transform:rotate(180deg); color:var(--navy); }

        /* CTA */
        .ut-cta { position:relative; border-radius:32px; padding:72px 40px; text-align:center; overflow:hidden;
          background:linear-gradient(135deg,var(--navy-900),var(--navy) 55%, var(--navy-600));
        }
        .ut-cta::before {
          content:''; position:absolute; width:420px; height:420px; border-radius:50%;
          background:radial-gradient(circle, rgba(60,207,207,0.35), transparent 70%);
          top:-160px; right:-120px; animation:breathe 7s ease-in-out infinite;
        }
        .ut-cta h2 { color:white; font-size:clamp(28px,4vw,42px); font-weight:600; position:relative; z-index:2; }
        .ut-cta p { color:rgba(255,255,255,0.75); margin:16px 0 30px; position:relative; z-index:2; font-size:16px; }
        .ut-cta .ut-btn-primary { background:white; color:var(--navy); position:relative; z-index:2; box-shadow:0 14px 30px rgba(0,0,0,0.2); }
        .ut-cta .ut-btn-primary:hover { transform:translateY(-2px); }
        .ut-cta-note { color:rgba(255,255,255,0.5); font-size:12.5px; margin-top:16px; position:relative; z-index:2; }

        /* FOOTER */
        .ut-footer { padding:70px 0 36px; border-top:1px solid var(--border); margin-top:40px; }
        .ut-footer-grid { display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr; gap:32px; }
        @media (max-width:780px){ .ut-footer-grid{ grid-template-columns:1fr 1fr; } }
        .ut-footer h4 { font-size:13px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-faint); margin-bottom:16px; font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; }
        .ut-footer a { display:block; color:var(--ink-soft); text-decoration:none; font-size:14.5px; margin-bottom:11px; }
        .ut-footer a:hover { color:var(--navy); }
        .ut-footer-bottom { display:flex; justify-content:space-between; align-items:center; margin-top:50px; padding-top:24px; border-top:1px solid var(--border); font-size:13px; color:var(--ink-faint); flex-wrap:wrap; gap:12px; }
      `}</style>

      {/* NAVBAR */}
      <nav className={`ut-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="ut-nav-inner">
          <div className="ut-logo"><span className="ut-logo-mark" />UnTense</div>
          <div className="ut-nav-links">
            <a href="#features">Features</a>
            <a href="#experts">Experts</a>
            <a href="#categories">Categories</a>
            <a href="#faq">About</a>
            <a href="#footer">Contact</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button className="ut-nav-cta">
  Join Waitlist
</button>
            <button className="ut-nav-burger" onClick={() => setMenuOpen((m) => !m)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="ut-mobile-menu">
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#experts" onClick={() => setMenuOpen(false)}>Experts</a>
          <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#footer" onClick={() => setMenuOpen(false)}>Contact</a>
          <button className="ut-nav-cta">
  Join Waitlist
</button>
        </div>
      )}

      {/* HERO */}
      <header className="ut-hero">
        <div className="ut-container ut-hero-grid">
          <div>
            <div className="ut-soon-badge">
              <span className="dot-wrap"><span /></span>
              Coming Soon — Launching 2026
            </div>
            <span className="ut-eyebrow">Now welcoming early members</span>
            <h1>Guidance when life<br />feels uncertain.</h1>
            <p className="ut-hero-sub">
              Connect instantly with verified psychologists, therapists, career coaches and relationship
              experts through secure audio, video and chat consultations.
            </p>
            <div className="ut-hero-actions">
              <button className="ut-btn-primary">Join Waitlist <ArrowRight size={17} /></button>
              <button className="ut-btn-ghost">Become an Expert</button>
            </div>
            <div className="ut-trust">
              <div className="ut-avatars"><span /><span /><span /><span /></div>
              <span>2,300+ people already on the waitlist</span>
            </div>
          </div>

          <div className="ut-hero-visual">
            <div className="ut-orb" />
            <div className="ut-chip-float ut-chip-1"><Smile size={14} color="#3CCFCF" /> Mood: Calm</div>
            <div className="ut-chip-float ut-chip-2"><Star size={14} color="#E8B870" fill="#E8B870" /> 4.9 average rating</div>
            <div className="ut-chip-float ut-chip-3"><ShieldCheck size={14} color="#163A70" /> Verified therapist</div>

            <div className="ut-main-card">
              <div className="ut-main-card-head">
                <div className="ut-avatar-lg">MS</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Dr. Meera Shah</div>
                  <div style={{ fontSize: 12.5, color: "var(--ink-soft)" }}><span className="ut-status-dot" />Connected</div>
                </div>
              </div>
              <div className="ut-wave">
                {Array.from({ length: 18 }).map((_, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.07}s`, height: `${30 + (i % 5) * 14}%` }} />
                ))}
              </div>
              <div className="ut-timer">
                <span>Live audio session</span>
                <span className="ut-mono">12:04</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CATEGORIES */}
      <section className="ut-section" id="categories">
        <div className="ut-container">
          <Reveal>
            <div className="ut-sec-head">
              <span className="ut-eyebrow">What's on your mind</span>
              <h2>Whatever you're carrying, there's someone for it.</h2>
              <p>Sixteen ways people start a conversation with us — pick the one that's closest to today.</p>
            </div>
          </Reveal>
          <div className="ut-cat-grid">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.label} delay={i * 35}>
                <div className="ut-cat-card">
                  <div className="ut-cat-icon"><c.icon size={20} /></div>
                  <span>{c.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="ut-section" id="features" style={{ background: "white" }}>
        <div className="ut-container">
          <Reveal>
            <div className="ut-sec-head">
              <span className="ut-eyebrow">Why UnTense</span>
              <h2>Built so the hard part is reaching out — not what happens after.</h2>
            </div>
          </Reveal>
          <div className="ut-why-grid">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="ut-why-card">
                  <div className="ut-why-icon"><w.icon size={21} /></div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="ut-section">
        <div className="ut-container">
          <Reveal>
            <div className="ut-sec-head">
              <span className="ut-eyebrow">How it works</span>
              <h2>Three steps, no waiting room.</h2>
            </div>
          </Reveal>
          <div className="ut-steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="ut-step">
                  <div className="ut-step-n">{s.n}</div>
                  <div className="ut-step-icon"><s.icon size={21} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTS */}
      <section className="ut-section" id="experts" style={{ background: "white" }}>
        <div className="ut-container">
          <Reveal>
            <div className="ut-sec-head">
              <span className="ut-eyebrow">Featured experts</span>
              <h2>A few of the people you could be talking to today.</h2>
            </div>
          </Reveal>
          <div className="ut-expert-grid">
            {EXPERTS.map((e, i) => (
              <Reveal key={e.name} delay={i * 70}>
                <div className="ut-expert-card">
                  <div className="ut-expert-top">
                    <div className="ut-expert-avatar">{e.initials}{e.online && <span className="ut-online-dot" />}</div>
                    <div>
                      <h3>{e.name}</h3>
                      <div className="role">{e.role}</div>
                    </div>
                  </div>
                  <div className="ut-expert-meta">
                    <span className="ut-rating"><Star size={13} fill="#E8B870" /> {e.rating}</span>
                    <span>{e.exp} experience</span>
                  </div>
                  {e.online && <div className="ut-badge-avail"><span className="ut-status-dot" style={{ animation: "pulseDot 2s infinite" }} />Available now</div>}
                  <button className="ut-book-btn">Book Session</button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="ut-section">
        <div className="ut-container">
          <Reveal>
            <div className="ut-sec-head" style={{ margin: "0 auto", textAlign: "center" }}>
              <span className="ut-eyebrow" style={{ justifyContent: "center" }}>Member stories</span>
              <h2>People who reached out before you.</h2>
            </div>
          </Reveal>
          <div className="ut-test-wrap">
            <p className="ut-test-quote" key={testIndex}>"{TESTIMONIALS[testIndex].quote}"</p>
            <div className="ut-test-name">{TESTIMONIALS[testIndex].name}</div>
            <div className="ut-test-role">{TESTIMONIALS[testIndex].role}</div>
            <div className="ut-test-dots">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} className={i === testIndex ? "active" : ""} onClick={() => setTestIndex(i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ut-section" id="faq" style={{ background: "white" }}>
        <div className="ut-container">
          <Reveal>
            <div className="ut-sec-head" style={{ margin: "0 auto", textAlign: "center" }}>
              <span className="ut-eyebrow" style={{ justifyContent: "center" }}>Questions</span>
              <h2>Before you reach out</h2>
            </div>
          </Reveal>
          <div className="ut-faq">
            {FAQS.map((f, i) => (
              <div key={f.q} className={`ut-faq-item ${faqOpen === i ? "open" : ""}`} onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}>
                <div className="ut-faq-q">{f.q}<ChevronDown size={18} /></div>
                <div className="ut-faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ut-section">
        <div className="ut-container">
          <Reveal>
            <div className="ut-cta">
              <h2>Ready to find clarity?</h2>
              <p>Join the waitlist and be among the first to talk to a verified expert when we launch.</p>
              <button className="ut-btn-primary">Join Waitlist <ArrowRight size={17} /></button>
              <div className="ut-cta-note">No credit card required to join the waitlist.</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ut-footer" id="footer">
        <div className="ut-container">
          <div className="ut-footer-grid">
            <div>
              <div className="ut-logo" style={{ marginBottom: 14 }}><span className="ut-logo-mark" />UnTense</div>
              <p style={{ color: "var(--ink-soft)", fontSize: 14, maxWidth: 260, lineHeight: 1.6 }}>
                Helping people navigate life's toughest decisions by connecting them instantly with trusted professionals.
              </p>
            </div>
            <div>
              <h4>Platform</h4>
              <a href="#categories">Categories</a>
              <a href="#features">Why UnTense</a>
              <a href="#experts">Experts</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#faq">About</a>
              <a href="#footer">Contact</a>
              <a href="#footer">Become an Expert</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#footer">Privacy Policy</a>
              <a href="#footer">Terms of Service</a>
            </div>
          </div>
          <div className="ut-footer-bottom">
            <span>© 2026 UnTense. All rights reserved.</span>
            <span>Made for the moments that need it most.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
