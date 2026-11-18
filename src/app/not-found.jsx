import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] md:py-[100px] text-center">
        {/* Label */}
        <p
          className="not-found-enter hero-label justify-center"
          style={{ '--enter-delay': '0.1s', '--enter-transform': 'translateY(10px)' }}
        >
          PAGE NOT FOUND
        </p>

        {/* Big 404 */}
        <h1
          className="not-found-enter font-heading font-extrabold leading-[0.85] m-0 mb-[24px] tracking-[-4px] md:tracking-[-8px] uppercase select-none"
          style={{ '--enter-delay': '0.2s', '--enter-duration': '0.6s', '--enter-transform': 'scale(0.9)', fontSize: 'clamp(120px, 25vw, 280px)' }}
        >
          4<span className="text-accent">0</span>4
        </h1>

        {/* Message */}
        <p
          className="not-found-enter font-sans text-base leading-[1.6] mb-[16px] max-w-[480px] mx-auto"
          style={{ '--enter-delay': '0.4s' }}
        >
          The page you're looking for doesn't exist,<br />
          was moved, or never existed in the first place.
        </p>

        <p
          className="not-found-enter font-sans text-sm opacity-60 mb-[40px]"
          style={{ '--enter-delay': '0.5s' }}
        >
          — But there's plenty more to explore —
        </p>

        {/* CTAs */}
        <div
          className="not-found-enter flex flex-col md:flex-row gap-[16px] justify-center"
          style={{ '--enter-delay': '0.6s', '--enter-transform': 'translateY(10px)' }}
        >
          <Link href="/" className="btn-primary">
            BACK TO HOME
          </Link>
          <Link href="/projects" className="btn-secondary">
            VIEW MY WORK
          </Link>
          <Link href="/contact" className="btn-outline">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}
