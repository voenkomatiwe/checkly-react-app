import React from 'react'

import images from '../../css/images/Pic1.png'
import magniflying from '../../css/images/magniflying.png'
// import flyingkite from '../../css/images/flyingkite.png'
// import flag from '../../css/images/flag.png'
// import something from '../../css/images/something.png'
// import ok from '../../css/images/ok.png'
import Footer from './footers'
import ChecklyLogo from '../checklyLogo'

function HomePage() {
  return (
    <div className='container'>
      <div className='header'>
        <ChecklyLogo />

        <div className='div-href'>
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
          <span className='first-middle-text1'>Challenge</span>
          <br />
          <span className='first-middle-text2'>the world now!</span>
          <br />
          <div>
            <span className='first-middle-text3'>
              Take a fun new way to improve yourself and your life by possibly
            </span>
            <br />
            <span className='first-middle-text3'>
              taking part in challenges. Be the champion of your life.
            </span>
          </div>
          <button className='btn btn-first' type='button'>
            <span className='text-btn'>Challenge me</span>
          </button>
        </div>
        <div className='pic1'>
          <img src={images} alt='images' />
        </div>
      </div>
      <div className='lower-block'>
        <div className='first-group'>
          <div className='first-group-text'>
            <div className='first-group-text1'>
              <img className='icon-images' src={magniflying} alt='Loop' />
              <p>
                Explore the world of <br />
                self-development
              </p>
            </div>
            <div className='first-group-text1'>
              <p>Follow personalized</p>
            </div>
            <div className='first-group-text1'>
              <p>
                Complete with friends <br />
                or individually
              </p>
            </div>
          </div>
        </div>
        <div className='first-group'>
          <div className='first-group-text'>
            <div className='first-group-text2'>
              <p>
                Share your experience <br />
                with the world
              </p>
            </div>
            <div className='first-group-text2'>
              <p>
                Start being a new <br />
                version of yourself
              </p>
            </div>
          </div>
        </div>
        <div className='second-group'>
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
