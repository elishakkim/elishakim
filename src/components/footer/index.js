import React, { useState, useEffect } from 'react'
import { Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { IoMdArrowUp } from 'react-icons/io'
import './style.scss'

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
		backgroundColor: theme.palette.common.black,
		fontSize: '13px'
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const Footer = (props) => {
  const [isTop, setIsTop] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position === 0) setIsTop(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isTop === true)
    window.scrollTo(0, 0)
  }, [isTop])

  const scrollUp = (e) => {
    e.preventDefault()
    setIsTop(true)
  }

  return (
    <div className='footer'>
      <div className='mobile'>This website is mobile friendly</div>
      <div className='updated'>Last updated on May 15, 2020</div>
      <div className='arrowUp'>
      <BootstrapTooltip arrow enterDelay={200} leaveDelay={200} placement='top' title='Top'>
        <button onClick={(e) => scrollUp(e)}> 
          <IoMdArrowUp/>      
        </button>
      </BootstrapTooltip>
      </div>
      <div className='copyright'>2020 Elisha Kim</div>
    </div>
  )
}

export default Footer