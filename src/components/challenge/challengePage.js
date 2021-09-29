import React from 'react'
import ChecklyLogo from '../checklyLogo'

function ChallengePage() {
  return (
    <div className='container'>
      <div className='header'>
        <ChecklyLogo />
      </div>
      <div className='progress'>
        <div className=''></div>
      </div>
      <div className='title-question'>What is your age?</div>
      <div className='answer-blocks'>
        <div className='block'>
          <p className='first-text-block'>20s</p>
          <p className='second-text-block'>18 - 29 years</p>
        </div>
        <div className='block'>
          <p className='first-text-block'>30s</p>
          <p className='second-text-block'>30 - 39 years</p>
        </div>
        <div className='block'>
          <p className='first-text-block'>40s</p>
          <p className='second-text-block'>40 - 59 years</p>
        </div>
        <div className='block'>
          <p className='first-text-block'>50s</p>
          <p className='second-text-block'>-</p>
        </div>
      </div>
    </div>
  )
}

export default ChallengePage
