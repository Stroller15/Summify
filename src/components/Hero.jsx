
const Hero = () => {
  return (
    <header className='flex flex-col items-center justify-center w-full'>
      <nav className='flex justify-between w-full pt-3 mb-10 item-center'>
        <h1 className='object-contain w-28 font-extrabold text-2xl orange_gradient'>Summify</h1>

        <button
        type='button'
          onClick={() => window.open('https://github.com/Stroller15/Summify')}
        className='black_btn'
        >Github</button>
      </nav>

      <h1 className="head_text">
        Summarize Article with 
        <br className='max-md:hidden' />
        <span className='orange_gradient'> OpenAI GPT-4

        </span>
      </h1>

      <h2 className='desc'>
        Introducing Summify: Your reading made simple <br /> Summify is an open-source article summarizer that converts lengthy articles into clear and concise summaries, enhancing your reading experience
      </h2>
    </header>
  )
}

export default Hero
