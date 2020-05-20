import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { IoIosRainy, IoMdChatbubbles } from 'react-icons/io'
import './style.scss'

const Contact = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexGrow: 1,
				height: '100%',
				width: '100%'
			}}
		>
		<Col
			style={{
				flexDirection: 'column',
				display: 'flex',
				flex: 1,
				alignItems: 'center',
			}}
		>
			<Row>
				<h1>My Projects</h1>			
			</Row>
			<Row
				style={{
					display: 'flex',
					flex: 1,
					alignContent: 'flex-start',
					justifyContent: 'center',
					width: '100%'
				}}
			>
				<Col
					style={{
						flexDirection: 'column',
						display: 'flex',
						alignItems: 'center'
					}}
					lg={3}
				>
					<a className='link-contents' href='https://elisha-weather-app.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
						<IoIosRainy className='project-icon'/>
						<div className='project-title'>Current Weather</div>
						<div>
							Allows for users to find their current weather using an address search bar. Built with Node.js and Handlebars.js.
						</div>
					</a>
				</Col>
				<Col
					style={{
						flexDirection: 'column',
						display: 'flex',
						alignItems: 'center'
					}}
					lg={3}
				>
					<a className='link-contents' href='https://elisha-chat-app.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
						<IoMdChatbubbles className='project-icon'/>
						<div className='project-title'>Chat with Friends</div>
						<div>
							Allows for users to chat with other users in the same chat-room. Build with Node.js and Socket.IO from the javascript library, which allows for bi-directional communication between web clients and servers.
						</div>
					</a>
				</Col>
			</Row>
		</Col>
		</div>
	)
}

export default Contact