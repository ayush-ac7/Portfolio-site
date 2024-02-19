export function Homepage() {
    return (
      <div>
        <section
          id="home"
          className="hero bg-gray-200 flex flex-col h-screen relative w-full font-custom1"
        >
          <div className="container w-[1030px] h-[650px] mx-[249px] px-10">
            <div className="content flex items-center justify-center gap-40 h-4/5 relative">
              <div className="hero-main flex items-center justify-center w-[950px] h-[350px] gap-x-32">
                <div className="hero-text flex flex-col relative w-[500px] h-[325px]">
                  <h1 className="text-6xl font-semibold text-gray-800 my-6">
                    Full-Stack Web Developer
                  </h1>
                  <img
                    className="absolute right-0 h-16 w-16 mr-24 top-20"
                    src={"/wavingHand.png"}
                    alt="waving_hand"
                  />
                  <p className="text-[18px] text-gray-700">
                    Hi, I'm Prashant Tomar. A passionate Full-Stack Web <br />
                    Developer based in India. 📍
                  </p>
                  <span className="cursor-pointer flex my-6 gap-5 h-44">
                    <a
                      aria-label="linkedin"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/prashant-tomar-504355200/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-brand-linkedin hover:scale-125"
                      >
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                        <path d="M8 11l0 5"></path>
                        <path d="M8 8l0 .01"></path>
                        <path d="M12 16l0 -5"></path>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                      </svg>
                    </a>
                    <a
                      aria-label="github"
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/BytePrashant"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-brand-github hover:scale-125"
                      >
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="hero-img">
                  <img
                    className="hero-img bg-cover bg-center border-3 border-gray-700 h-80 w-80 animate-trans-bubble"
                    src={"/hero.jpg"}
                    alt="hero-img"
                  />
                </div>
              </div>
              <div className="skills flex items-center absolute bottom-0 left-0 w-3/4 h-14">
                <p className="border-r-2 border-solid border-gray-800 font-semibold w-32 h-5 mr-16 pr-5">
                  Tech Stack
                </p>
                <div className="logos">
                  <ul className="flex flex-wrap gap-8">
                    <li>
                      <img
                        className="hover:translate-y-[-1rem] transition-all duration-500 ease-in-out"
                        src="https://skillicons.dev/icons?i=js,ts"
                        alt="skill-icon"
                      />
                    </li>
                    <li>
                      <img
                        className="hover:translate-y-[-1rem] transition-all duration-500 ease-in-out"
                        src="https://skillicons.dev/icons?i=react,next"
                        alt="skill-icon"
                      />
                    </li>
                    <li>
                      <img
                        className="hover:translate-y-[-1rem] transition-all duration-500 ease-in-out"
                        src="https://skillicons.dev/icons?i=nodejs,expressjs"
                        alt="skill-icon"
                      />
                    </li>
                    <li>
                      <img
                        className="hover:translate-y-[-1rem] transition-all duration-500 ease-in-out"
                        src="https://skillicons.dev/icons?i=materialui,tailwind"
                        alt="skill-icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }