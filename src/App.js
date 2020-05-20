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
	constructor(props) {
		super(props);
		this.state = {
			windowWidth: 0,
			windowHeight: 0
		};

		this.updateDimensions = this.updateDimensions.bind(this);
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions)
	}

	updateDimensions() {
		let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
		let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

		this.setState({ windowWidth, windowHeight })
	}

	render() {
		const { windowWidth } = this.state;
		

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
									<Route path='/contact' exact>
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