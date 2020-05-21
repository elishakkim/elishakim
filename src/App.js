import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import history from './history'
import Home from './components/home'
import Resume from './components/resume'
import Contact from './components/work'
import StepperBar from './components/stepper'
import Header from './components/header'
import Footer from './components/footer'
import { Row, Col } from 'react-bootstrap'
import './style.scss'

class App extends Component {

	render() {

		return (
			<div 
				style={{
					display: 'flex',
					flex: 1,
					height: '100%',
					width: '100%'
				}}
			>
				<Router history={history}>
						<Row style={{
							display: 'flex',
							flexDirection: 'column',
							alignContent: 'stretch',
							width: '100%',
							height: '100%',
							flex: 1,
						}}
							className='body'
						>
							<Col className='header'>
								<Header/>							
							</Col>
							<Col>
								<StepperBar className='main'/>							
							</Col>
							<Col className='main' style={{ flex: 1}}>
								<Switch>
									<Route path='/' exact>
										<Home />
									</Route>
									<Route path='/resume' exact>
										<Resume />
									</Route>
									<Route path='/work' exact>
										<Contact />
									</Route>
									<Route path='/*'>
										404 Page Does Not Exist
									</Route>
								</Switch>
							</Col>
							<Col className='footer'>
								<Footer />
							</Col>
						</Row>

				</Router>
			</div>
		)
	}
}

export default App