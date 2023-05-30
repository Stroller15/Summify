import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between item-center w-full mb-10 pt-3'>
        <img src={logo} alt="logo" className='w-28 object-contain'/>

        <button
        type='button'
        onClick={() => window.open('https://github.com')}
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
