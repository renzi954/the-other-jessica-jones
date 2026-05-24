export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black">

      {/* DESKTOP VERSION */}

      <img
        src="/author-bg-final.png"
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

      <div
        className="
          md:hidden
          min-h-screen
          flex
          items-center
          justify-center
          px-6
          text-center
          bg-[#ede4d3]
          text-black
        "
        style={{
          backgroundImage: "url('/author-bg-final.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >

        <div className="bg-[#ede4d3]/78 p-6 rounded-sm max-w-sm">

          <h1
            className="text-4xl leading-tight mb-6"
            style={{
              fontFamily: "'Courier New', monospace",
            }}
          >
            the other
            <br />
            jessica jones
          </h1>

          <div className="w-14 h-[2px] bg-[#7a0d0d] mx-auto mb-6"></div>

          <p
            className="text-lg leading-relaxed mb-8"
            style={{
              fontFamily: "'Courier New', monospace",
            }}
          >
            Writing about the dark corners
            of the human experience.
          </p>

          <h2
            className="text-3xl text-[#7a0d0d] mb-8"
            style={{
              fontFamily: "'Courier New', monospace",
            }}
          >
            coming soon
          </h2>

          <p
            className="text-base leading-relaxed"
            style={{
              fontFamily: "'Courier New', monospace",
            }}
          >
            Stories about monsters, memory,
            loneliness, and the things people
            hide from themselves.
          </p>

        </div>

      </div>

    </main>
  );
}