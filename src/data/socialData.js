import React from 'react'
import {FaGithub , FaPortrait , FaLinkedin} from 'react-icons/fa'

const socialData = [
    {
        id : 1,
        icon : <FaGithub className="icon"></FaGithub>,
        url : 'https://github.com/ravibpibs'
    },
    {
        id : 2,
        icon : <FaPortrait className="icon"></FaPortrait>,
        url : 'https://raviranjanportfolio.netlify.app/'
    },
    {
        id : 3,
        icon : <FaLinkedin className="icon"></FaLinkedin>,
        url : 'https://www.linkedin.com/in/ravi-ranjan-jha-7860231a2/'
    }
]
export default socialData