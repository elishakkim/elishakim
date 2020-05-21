import React from 'react'
import moment from 'moment'
import { Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { IoLogoGithub, IoLogoLinkedin, IoIosList } from 'react-icons/io'
import { Row, Col } from 'react-bootstrap'
import picture from './profile.jpg'
import resume from './ElishaKim_Resume.pdf'
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

const Home = (props) => {

	const greetingText = () => {
		const now = moment()
		const currentHour = now.local().hour()
		if (currentHour >= 0 && currentHour <= 12) return "Good Morning"
		else if (currentHour > 12 && currentHour <= 17) return "Good Afternoon"
		else return "Good Evening"
	}

	return (
		<div 
			className='home' 
			style={{ 
				display: "flex", 
				justifyContent: 'center', 
				flexGrow: 1 
			}}
		>
				<Row
					style={{
						flex: 1,
						display: 'flex',
						justifyContent: 'space-around',
						alignContent: 'center',
						flexWrap: 'wrap'
					}}
				>
					<Col
						sm={12}
						md={5}
						lg={4}
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<img alt='Elisha Kim Profile' className='picture' src={picture} />
					</Col>
					<Col
						sm={12}
						md={5}
						lg={4}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							paddingTop: '30px',
							paddingLeft: '30px'
						}}
					>
						<h3 className='line-1 anim-typewriter'>{greetingText()}! I am...</h3>
						<div className='home-text'>
							Motivated full-stack developer familiar with a wide range of programming utilities and languages.  Knowledgeable of backend and frontend development requirements. Diligent and meticulous professional  commended for quickly and accurately learning new procedures.
						</div>
						<div className='social'>
							<BootstrapTooltip arrow enterDelay={200} leaveDelay={200} placement='bottom' title='Resume'>
								<a href={resume} target='_blank' rel='noopener noreferrer'>
								<IoIosList size={45} />
								</a>
							</BootstrapTooltip>
							<BootstrapTooltip arrow enterDelay={200} leaveDelay={200} placement='bottom' title='Github'>
								<a href='https://github.com/elishakkim' target='_blank' rel='noopener noreferrer'>
								<IoLogoGithub size={45}/>
								</a>
							</BootstrapTooltip>
							<BootstrapTooltip arrow enterDelay={200} leaveDelay={200} placement='bottom' title='LinkedIn'>
							<a href='https://www.linkedin.com/in/elishadkim/' target='_blank' rel='noopener noreferrer'>
								<IoLogoLinkedin size={45} />
							</a>
							</BootstrapTooltip>
						</div>
					</Col>
				</Row>
		</div>
	)
}

export default Home