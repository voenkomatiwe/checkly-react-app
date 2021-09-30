import React from 'react'
import image from '../../css/images/Pic1.png'
import magniflying from '../../css/images/magniflying.png'
// import flyingkite from '../../css/images/flyingkite.png'
// import flag from '../../css/images/flag.png'
// import something from '../../css/images/something.png'
// import ok from '../../css/images/ok.png'
import Footer from './Footer'
import logo from '../../css/images/logoCheckly.png'

function HomePage() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='checkly-logo '>
          <img className='logo' src={logo} alt='logo' />
        </div>
        <div className='navbar'>
          <div>
            <a href='/'>About</a>
          </div>
          <div>
            <a href='/'>Contact us</a>
          </div>
        </div>
      </div>
      <div className='middle-block'>
        <div className='middle-text'>
          <span className='first-middle-text'>Challenge</span>
          <br />
          <span className='second-middle-text'>the world now!</span>
          <br />
          <div>
            <span className='third-middle-text'>
              Take a fun new way to improve yourself and your life by possibly
            </span>
            <br />
            <span className='third-middle-text'>
              taking part in challenges. Be the champion of your life.
            </span>
          </div>
          <button className='btn btn-first' type='button'>
            <span className='text-btn'>Challenge me</span>
          </button>
        </div>
        <div className='pic1'>
          <img src={image} alt='background pic checkly' />
        </div>
      </div>
      <div className='lower-block'>
        <div className='first-block'>
          <div className='first-group'>
            <div className='first-group-text'>
              <img className='icon-images' src={magniflying} alt='Loop' />
              <p>
                Explore the world of <br />
                self-development
              </p>
            </div>
            <div className='first-group-text'>
              <p>Follow personalized</p>
            </div>
            <div className='first-group-text'>
              <p>
                Complete with friends <br />
                or individually
              </p>
            </div>
          </div>
        </div>
        <div className='first-block'>
          <div className='first-group'>
            <div className='first-group-text'>
              <p>
                Share your experience <br />
                with the world
              </p>
            </div>
            <div className='first-group-text'>
              <p>
                Start being a new <br />
                version of yourself
              </p>
            </div>
          </div>
        </div>
        <div className='second-block'>
          <button className='btn btn-second' type='button'>
            <span className='text-btn'>Challenge me</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
