import React from 'react'
import adsGoogle from '../../css/images/adsGoogle.png'
import adsApple from '../../css/images/adsApple.png'
import facebook from '../../css/images/Facebook.png'
import twitter from '../../css/images/Twitter.png'
import linkedIn from '../../css/images/LinkedIn.png'
import vector from '../../css/images/Vector.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-group'>
        <div className='first-footer-group'>
          <div className='text-footer'>Get the app</div>
          <div>
            <img className='ads-img' src={adsGoogle} alt='asdGoogle' />
            <img className='ads-img' src={adsApple} alt='adsApple' />
          </div>
        </div>
        <div className='second-footer-group'>
          <div className='text-footer'>Follow us</div>
          <div>
            <img className='follow-us-img' src={facebook} alt='facebook' />
            <img className='follow-us-img' src={vector} alt='vector' />
            <img className='follow-us-img' src={twitter} alt='twitter' />
            <img className='follow-us-img' src={vector} alt='vector' />
            <img className='follow-us-img' src={linkedIn} alt='linkedIn' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
