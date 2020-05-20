import React from 'react'
import {
	IoIosInformationCircleOutline as InfoIcon,
	IoIosBriefcase,
	IoMdSchool,
	IoIosChatbubbles,
	IoIosOptions
} from 'react-icons/io'
import {
	BsFillSquareFill,
	BsSquareHalf,
	BsSquare,
} from 'react-icons/bs'
import {
	Row, Col
} from 'react-bootstrap'
import './style.scss'

const Resume = (props) => {

	return (
		<div className='resume'>
			<Row
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					flexFlow: 'row wrap',
					alignItems: 'flex-start'
				}}
			>
				<Row
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexFlow: 'column wrap',
						flex: 1
					}}
					lg={6}
					md={12}
					sm={12}
				>
					<Col
						lg={12}
					>
						<hr />
						<section>
							<InfoIcon className='icon' />
							<div className='title'>
								Information
								</div>
						</section>
						<hr />
						<Row
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-around'
							}}
						>
							<Col>
								<div className='sub'>
									Location:
								</div>
								<div className='sub'>
									Contact:
								</div>
							</Col>
							<Col>
								<ul
									style={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
										listStyle: 'none'
									}}
								>
									<li className='detail info-detail' style={{ paddingTop: '15px' }}>2620 Gadsen Walk,</li>
									<li className='detail info-detail'>Duluth, GA 30097</li>
									<li className='detail info-detail' style={{ paddingTop: '10px' }}>(678)-823-1935</li>
									<li className='detail info-detail'>elishakkim@gmail.com</li>
								</ul>
							</Col>
						</Row>
					</Col>
					<Col
						lg={12}
					>
						<hr />
						<section>
							<IoMdSchool className='icon' />
							<div className='title'>
								Education
							</div>
						</section>
						<hr />
						<Row
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-around'
							}}
						>
							<Col>
								<div className='sub education-sub'>
									Georgia State University
							</div>
								<div className='sub education-sub major'>
									Bachelor of Arts in English
							</div>
							</Col>
							<Col>
								<div className='detail education-detail'>
									2012-2016
							</div>
								<div className='detail education-detail gpa'>
									GPA: 3.7
							</div>
							</Col>
						</Row>
					</Col>
					<Col
						lg={12}
					>
						<hr />
						<section>
							<IoIosOptions className='icon' />
							<div className='title'>
								Skills
								</div>
						</section>
						<hr />
						<Row
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-around'
							}}
						>
							<Col>
								<div className='sub front-end'>
									Front-End
								</div>
								<div className='sub'>
									Back-End
								</div>
								<div className='sub databases'>
									Databases
								</div>
								<div className='sub knowledge'>
									Basic Knowledge
								</div>
							</Col>
							<Col>
								<div className='detail'>
									<ul>
										<li>HTML</li>
										<li>CSS + Bootstrap</li>
										<li>React + Redux</li>
										<li>ASP.Net</li>
										<li>Javascript</li>
									</ul>
								</div>
								<div className='detail'>
									<ul>
										<li>Node.js</li>
										<li>Java</li>
										<li>C#</li>
									</ul>
								</div>
								<div className='detail'>
									<ul>
										<li>Microsoft SQL Server</li>
										<li>MongoDB</li>
									</ul>
								</div>
								<div className='detail'>
									<ul>
										<li>Python</li>
										<li>C++</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Col>
					<Col
						lg={12}
					>
						<hr />
						<section>
							<IoIosChatbubbles className='icon' />
							<div className='title'>
								Languages
							</div>
						</section>
						<hr />
						<Row
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-around'
							}}
						>
							<Col>
								<div className='sub english'>
									English
								</div>
								<div className='sub korean'>
									Korean
								</div>
							</Col>
							<Col>
								<div className='detail english-sub'>
									<BsFillSquareFill className='icon language' />
									<BsFillSquareFill className='icon language' />
									<BsFillSquareFill className='icon language' />
									<BsFillSquareFill className='icon language' />
									<BsFillSquareFill className='icon language' />
									<BsFillSquareFill className='icon language' />
									<BsFillSquareFill className='icon language' />
								</div>
								<div className='detail korean-sub'>
									<BsFillSquareFill className='icon language' />
									<BsFillSquareFill className='icon language' />
									<BsFillSquareFill className='icon language' />
									<BsFillSquareFill className='icon language' />
									<BsSquareHalf className='icon rotate language' />
									<BsSquare className='icon language' />
									<BsSquare className='icon language' />
								</div>
							</Col>
						</Row>
					</Col>
				</Row>

				<Row
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexFlow: 'column wrap',
						flex: 1,
					}}
					lg={6}
					md={12}
					sm={12}
				>
					<Col
						lg={12}
					>
						<hr />
						<section>
							<IoIosBriefcase className='icon' />
							<div className='title'>
								Experience
							</div>
						</section>
						<hr />
						<Row
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'baseline',
								flexflow: 'row wrap'
							}}
						>
							<Col
								style={{
									flexGrow: 1,
									paddingLeft: '20px'
								}}
							>
								<div className='sub role'>
									Full-Stack Developer
								</div>
								<div className='sub company'>
									A Closer Look
								</div>
							</Col>
							<Col>
								<div className='detail date'>
									Aug 2019 - Apr 2020
								</div>
								<div className='detail date'>
									Norcross, GA
								</div>
							</Col>
						</Row>
						<Col>
							<ul className='job-description'>
								<li>
									Developed and optimized stored procedures and functions using T-SQL
						</li>
								<li>
									Converted ASP.Net pages from A Closer Look’s client and employee portal into ReactJS and Redux.
						</li>
								<li>
									Designed custom Ui components used within the portal.
						</li>
								<li>
									Implemented backend REST service using Node.js and Microsoft SQL Server.
						</li>
							</ul>
						</Col>
						<Row
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'baseline',
								flexflow: 'row wrap'
							}}
						>
							<Col
								style={{
									flexGrow: 1,
									paddingLeft: '20px'
								}}
							>
								<div className='sub role'>
									Chief of Staff
								</div>
								<div className='sub company'>
									Sam for Georgia
									</div>
							</Col>
							<Col>
								<div className='detail date'>
									Nov 2018 - Jan 2020
								</div>
								<div className='detail date'>
									Lawrenceville, GA
								</div>
							</Col>
						</Row>
						<Col
							style={{
								flex: 1,
							}}
						>
							<ul className='job-description'>
								<li>
									Hired, managed, developed and trained staff, established and monitored goals and administered salaries for staff.
								</li>
								<li>
									Attended meetings to make informed decisions, provided administrative support and evaluated  progress toward goals and objectives.
								</li>
								<li>
									Drafted and edited content for newsletters and social media content.
								</li>
							</ul>
						</Col>
						<Row
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'baseline',
								flexflow: 'row wrap'
							}}
						>
							<Col
								style={{
									flexGrow: 1,
									paddingLeft: '20px'
								}}
							>
								<div className='sub role'>
									Deputy Campaign Manager
								</div>
								<div className='sub company'>
									Sam for Georgia
								</div>
							</Col>
							<Col>
								<div className='detail date'>
									Jun 2018 - Nov 2020
								</div>
								<div className='detail date'>
									Lawrenceville, GA
								</div>
							</Col>
						</Row>
						<Col
							style={{
								flex: 1,
							}}
						>
							<ul className='job-description'>
								<li>
									Trained and mentored new campaign fellows in voter outreach, social media, and event planning.
								</li>
								<li>
									Managed payroll and scheduling for all campaign staff.
								</li>
								<li>
									Knocked on doors and coordinated canvassing launches.
								</li>
							</ul>
						</Col>
						<Row
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'baseline',
								flexflow: 'row wrap'
							}}
						>
							<Col
								style={{
									flexGrow: 1,
									paddingLeft: '20px'
								}}
							>
								<div className='sub role'>
									Math & Programming Tutor
							</div>
								<div className='sub company'>
									Eyelevel
							</div>
							</Col>
							<Col>
								<div className='detail date'>
									Mar 2017 - Jul 2018
							</div>
								<div className='detail date'>
									Suwanee, GA
							</div>
							</Col>
						</Row>
						<Col
							style={{
								flex: 1,
							}}
						>
							<ul className='job-description'>
								<li>
									Planned lessons for allotted time to strengthen weak subjects and build skills on stronger ones.
							</li>
								<li>
									Taught Math (K-12) and basic programming in Java.
							</li>
								<li>
									Worked with parents, students and co-workers to build support networks and enhance student  success
							</li>
							</ul>
						</Col>
					</Col>
				</Row>
			</Row>
		</div>
	)
}

export default Resume