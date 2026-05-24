export default function HomePage() {
  return (
    <main className="bg-black overflow-hidden">

      {/* DESKTOP VERSION */}

      <img
        src="/author-bg-desktop.png"
        alt="The Other Jessica Jones"
        className="
          hidden md:block
          w-full
          h-screen
          object-cover
          object-center
        "
      />

      {/* MOBILE VERSION */}

      <img
        src="/author-bg-mobile.png"
        alt="The Other Jessica Jones"
        className="
          block md:hidden
          w-full
          min-h-screen
          object-cover
          object-top
        "
      />

    </main>
  );
}