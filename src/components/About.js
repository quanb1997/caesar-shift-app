import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <h4>Built by Quan Bui</h4>
      <h5><a href='https://en.wikipedia.org/wiki/Caesar_cipher'> More info on Caesar Cipher</a></h5>
      <h5><a href='https://github.com/quanb1997'>My Github</a></h5>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About