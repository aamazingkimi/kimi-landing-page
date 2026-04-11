type ImageCardProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ALittleLanding() {
  const base =
    typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL
      ? import.meta.env.BASE_URL
      : '/kimi-landing-page/';

  const imageData = {
    img1: `${base}books/IMG_2644.jpg`,
    img2: `${base}books/IMG_2650.jpg`,
    img3: `${base}books/IMG_2651.jpg`,
    img4: `${base}books/IMG_2645.jpg`,
    img5: `${base}books/IMG_2685.jpg`,
    img6: `${base}books/IMG_2646.jpg`,
    img7: `${base}books/IMG_2647.jpg`,
    img8: `${base}books/IMG_2648.jpg`,
    img9: `${base}books/IMG_2649.jpg`,
    img10: `${base}books/IMG_2659.jpg`,
    img11: `${base}books/IMG_2686.jpg`,
    img12: `${base}books/IMG_2663.PNG`,
    img13: `${base}books/IMG_2641.jpg`,
    img14: `${base}books/IMG_2642.jpg`,
    img15: `${base}books/IMG_2643.jpg`,
  };

  const books = [
    { title: 'A Little… Missing You', subtitle: 'On longing and distance', img: imageData.img1 },
    { title: 'A Little… Let Go', subtitle: 'On release and acceptance', img: imageData.img2 },
    { title: 'A Little… Still Here', subtitle: 'On presence and quiet support', img: imageData.img3 },
    { title: 'A Little… Not Said', subtitle: 'On unspoken words', img: imageData.img4 },
    { title: 'A Little… Healing', subtitle: 'On slowly becoming whole again', img: imageData.img5 },
    { title: 'A Little… Goodbye', subtitle: 'On endings and closure', img: imageData.img6 },
  ];

  const reviews = [
    'Each mini book feels like someone finally said what I could never put into words.',
    'It doesn’t feel like a product. It feels like something that shows up exactly when you need it.',
    'We open and read them together. It’s more meaningful than any gift we’ve ever given.',
  ];

  const trustItems = [
    'Handcrafted mini books',
    'Worldwide delivery',
    'Curated emotional themes',
    'Cancel anytime',
  ];

  const ImageCard = ({ src, alt, className = '' }: ImageCardProps) => (
    <img
      src={src}
      alt={alt}
      className={`w-full object-cover bg-[#ece6de] ${className}`}
      loading="lazy"
      onError={(e) => {
        const target = e.currentTarget;
        target.style.opacity = '0';
        const parent = target.parentElement;
        if (parent && !parent.querySelector('[data-fallback]')) {
          const fallback = document.createElement('div');
          fallback.setAttribute('data-fallback', 'true');
          fallback.className =
            'absolute inset-0 flex items-center justify-center text-sm text-[#8f7b6d]';
          fallback.textContent = 'Image not found';
          parent.appendChild(fallback);
          parent.classList.add('relative');
        }
      }}
    />
  );

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#2d1f1a]">
      <header className="sticky top-0 z-50 border-b border-[#e2d6c6] bg-[#f7f1e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-[0.2em] uppercase">A Little…</div>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#books" className="hover:opacity-70">Books</a>
            <a href="#how" className="hover:opacity-70">How it works</a>
            <a href="#reviews" className="hover:opacity-70">Voices</a>
            <a href="#about" className="hover:opacity-70">About</a>
          </nav>
          <button className="rounded-full border border-[#2d1f1a] px-4 py-2 text-sm transition hover:bg-[#2d1f1a] hover:text-white">
            Subscribe
          </button>
        </div>
      </header>

      <section className="border-b border-[#e2d6c6] bg-[#f1e6da]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-4 text-center text-sm md:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#9b7b6a]">
              Emotional Micro Art Subscription
            </p>
            <h1 className="max-w-xl text-5xl leading-tight md:text-7xl">
              A Little… something you didn’t know you needed.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#6e5a4f]">
              Every two weeks, a mini book arrives. Not information — emotion. Not explanation —
              presence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#2d1f1a] px-6 py-3 text-white">
                Explore Books
              </button>
              <button className="rounded-full border border-[#2d1f1a] px-6 py-3 transition hover:bg-[#2d1f1a] hover:text-white">
                How it Works
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-[#ece6de]">
              <ImageCard src={imageData.img7} alt="Mini book detail" className="aspect-[4/5]" />
            </div>
            <div className="mt-8 overflow-hidden rounded-3xl bg-[#ece6de]">
              <ImageCard src={imageData.img8} alt="Mini book detail" className="aspect-[4/5]" />
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-[#ece6de]">
            <ImageCard src={imageData.img3} alt="Mini book opened in hand" className="aspect-[5/4]" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl">It arrives quietly.</h2>
            <p className="mt-5 text-lg leading-8 text-[#6e5a4f]">
              You’re not subscribing to content. You’re subscribing to a rhythm — one mini book,
              every two weeks, from a carefully built emotional world.
            </p>
          </div>
        </section>

        <section id="books" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9b7b6a]">Collection</p>
            <h2 className="mt-3 text-3xl md:text-5xl">A Little… Books</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-[#e2d6c6] bg-white/50"
              >
                <div className="overflow-hidden rounded-t-[2rem] bg-[#ece6de]">
                  <ImageCard src={item.img} alt={item.title} className="aspect-[4/5]" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-2 text-[#6e5a4f]">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="bg-[#f1e6da] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-3xl md:text-5xl">What they felt</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <div key={i} className="rounded-[2rem] bg-[#f7f1e8] p-8">
                  <p className="text-lg">“{review}”</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-[#ece6de]">
            <ImageCard src={imageData.img4} alt="Mini book scene" className="aspect-[4/5]" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl">A small emotional universe.</h2>
            <p className="mt-6 text-lg leading-8 text-[#6e5a4f]">
              Each mini book captures a small, honest moment — something you felt but never said
              out loud.
            </p>
          </div>
        </section>

        <section className="border-y border-[#e2d6c6] py-20 text-center">
          <h2 className="text-3xl md:text-5xl">Stay close.</h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="h-12 rounded-full border border-[#d8cdbd] bg-transparent px-4"
            />
            <button className="h-12 rounded-full bg-[#2d1f1a] px-6 text-white">Join</button>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-[#6e5a4f]">
        A Little… Emotional Micro Art Subscription
      </footer>
    </div>
  );
}