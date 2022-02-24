import './App.css';
import React, { Component } from 'react'
import {
	FaLinkedin,
	FaGithubSquare,
	FaInstagram,
	FaFacebookSquare,
	FaTwitterSquare
} from 'react-icons/fa'
import $ from 'jquery'
import WOW from 'react-wow'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div className='mainContainer'>
				<Navbar />
				<Header />
				<MyStory />
				<Drivense />
				<Projects />
			</div>
		)
	}
}

class Navbar extends Component {
	render() {
		return (
			<div className='navbar'>
				<div className='logo'>
					<img src='./img/PersonalLogo.jpg' />
				</div>
				<div className='links'>
					<a href='#my-story'>My Story</a>
					<a href='#my-experience'>My Experience</a>
					<a href='#drivense'>Drivense</a>
					<a href='#projects'>Projects</a>
				</div>
			</div>
		)
	}
}

class Header extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		(function ($) {
			$.fn.writeText = function (content) {
				var contentArray = content.split(""),
					current = 0,
					elem = this;
				setInterval(function () {
					if (current < contentArray.length) {
						elem.text(elem.text() + contentArray[current++]);
					}
				}, 80);
			};
	
		})($);

		// input text for typing animation 0
		$("#holder").writeText("STUDENT. PROGRAMMER. ENTREPRENEUR.");
	}

	render() {
		return (
			<div className='header'>

				<div className='text-links'>
					<div className='text'>
						<h2>Hafiz Bhuyan</h2>
						<h4><span id="holder"></span><span class="blinking-cursor">|</span></h4>
					</div>

					<div className='links'>
						<a href='https://www.linkedin.com/in/hafizbhuyan/'>
							<FaLinkedin size={50} color={'#00A0DC'} />
						</a>
						<a href='https://github.com/hafizbhuyan'>
							<FaGithubSquare size={50} color={'#141414'} />
						</a>
						<a href='https://www.instagram.com/Instagram/hafiz.bhuyan/'>
							<FaInstagram size={50} color={'#833AB4'} />
						</a>
						<a href='https://www.facebook.com/hafiz.bhuyan/'>
							<FaFacebookSquare size={50} color={'#1877F2'} />
						</a>
						<a href='https://www.twitter.com/hafiz_bhuyan/'>
							<FaTwitterSquare size={50} color={'#1DA1F2'} />
						</a>
					</div>
				</div>

				<div className='image'>
					<img src='./img/HafizBPic.jpg' />
				</div>

			</div>
		)
	}
}

class MyStory extends Component {
	render() {
		return (
			<div className='my-story'>
				<h2>My Story</h2>
				<hr />

				<div className='paragraph'>
					<div className='text'>
						<h4>James Madison University</h4>
						<p>
							For the past five years, I've been studying at JMU (Go Dukes!). I started as a
							computer science major, but changed to integrated science and technology after
							my sophomore year. I will be graduating this upcoming May 2022 with a bachelor
							of Science degree in ISAT with a concentration in software development. During
							my time at JMU I have grown professionally and personally. Before, I was terrified
							of giving class presentations, but now I am excited to share my ideas with hundreds
							of people. All of my skills, from programming to networking have improved to
							unimaginable heights. After graduation I will be joining the CoStar Group in their
							Washington DC office as an Associate Software Engineer.
						</p>
					</div>

					<div className='pictures'>
						<img src="./img/JMU_Pic.jpg" alt="" />
						<img src="./img/JMU_Pic3.jpg" alt="" />
					</div>
				</div>

				<div className="paragraph">
					<div className="text">
						<h4>Drivense</h4>
						<p>
							Drivense is a startup I have been working on since September 2018. It was first
							created to solve a common problem for college students: textbook prices. Our goal
							was to create the 'Netflix of textbooks', but because of larger players, the
							seasonal nature of the business and losing the passion for it, we decided to
							make a pivot. We are currently working on bringing professional networking
							to the 21st century. I go into further detail about my Drivense journey in
							it's own <a href="#drivense">section</a>.
						</p>
					</div>
					<div className="pictures">
						<img src="./img/Main Logo.png" alt="" />
					</div>
				</div>

				<div className="paragraph">
					<div className="text">
						<h4>Madison Venture Group</h4>
						<p>
							This was the first organization I joined in the fall of 2017, as a freshman. MVG has
							been the sole reason I joined the incredible community of founders, entrepreneurs and
							startups. After looking at all of the amazing startups that are currently out there
							reading about their founders, it sparked that itch for me to build something of my own.
							In spring of 2018, I along with four other members traveled to the University of Virginia
							to compete in the Undergraduate Venture Cup. In the spring of 2019, we hosted the first
							annual Madison Venture Cup, our own venture capital compeition. In the spring of 2020,
							I along with 5 other members traveled to American University to participate in the
							national Venture Capital Investment Compeition. All of these competitions allow students
							to see what it's like to be a VC by hearing real startups pitch, doing due diligence, making
							a terms sheet and closing a deal.
						</p>
					</div>
					<div className="pictures">
						<img src="/img/MVGOfficialLOGO.png" alt="" />
					</div>
				</div>

				<div className="paragraph">
					<div className="text">
						<h4>Society of Entrepreneurs</h4>
						<p>
							The second student organization I joined became my home for meeting other entreprenurial
							minded students. As a freshman I looked up to all of the other members as inspiration and
							mentors. Now I've been leading this organization as its president since January 2020. During
							my time at SOE, I also became part of the larger JMU entreprenurial ecosystem which is all
							under JMU's Gilliam Center for Entrepreneurship. Through the GCFE I met dozens of other JMU
							entrepreneurs, investors, and mentors. 
						</p>
					</div>
					<div className="pictures">
						<img src="./img/SOE.png" alt="" />
					</div>
				</div>

				<div className="paragraph">
					<div className="text">
						<h4>Future</h4>
						<p>
							As the first person in my family to attend an American university, from the start I had the
							ambition to become the CEO of a Fortune 500 company. Whether that company was an established
							one or one that I founded, didn’t matter. Over the past three years, I have built two mobile
							apps, the website for our first business venture, and our current app and website. I taught
							myself how to design, develop and deploy all of them. Outside of technology, being in the
							entrepreneurship community has pushed me out of my shell. Before my sophomore year, I was
							terrified of speaking in front of even my own family, but now I am excited to share my ideas
							in front of hundreds of people. I’m not like other legendary entrepreneurs that started coding
							at 10, built and sold apps at 15 or became a billionaire at 23. I’m just a student entrepreneur
							with two goals: making my parents proud and leaving behind a legacy.
						</p>
					</div>
					<div className="pictures">
						<img src="./img/Future.jpg" alt="" />
					</div>
				</div>
				
			</div>
		)
	}
}

class Drivense extends Component {
	render() {
		return (
			<section className="drivense" id="drivense">
				<h2>Drivense</h2>
				<hr />
				<div className="section">
					<h4>Founding</h4>
					<p>
						Founded in September of 2018, Drivense was first created to solve a common problem
						for college students: textbook prices. From September until the summer of 2019, I
						spent my time building the website using WordPress, learned about branding,
						licensing, how to raise money and got to meet so many other entrepreneurs in the JMU
						community.
					</p>
				</div>
				<div className="section">
					<h4>JMU Summer Venture Accelerator</h4>
					<p>
						In the summer of 2019, Drivense was accepted into the JMU Summer Venture Accelerator.
						JMU gave me a $4,000 stipend to work on the company over the summer. I was joined by
						five other companies and two non-profits and had two past accelerator companies as mentors.
						During the program we did case studies about Dropbox and Rent the Runway to learn how
						they built their companies. We learned about the Lean Startup and Paul Graham's principle
						of 'Build Things That Don't Scale'. There were three trips to Richmond, Washington DC and
						New York City. We got to meet mentors and founders of Richmond based accelerator, Lighthouse
						Labs, founders of current and soon to be unicorns in Washington DC and a NHL hall of famer
						in New York City. At the end of the accelerator, on September 18th, Drivense was pitched
						in an auditorium whose audience consisted of JMU's President and First Lady, Deans of Colleges,
						the Vice Provost, professors and students.
					</p>
				</div>
				<div className="section">
					<h4>Pivot</h4>
					<p>
						During the covid-19 pandemic, we got a chance to virtually meet with those in leadership positions
						at some of the largest textbook publishers. After those conversations, we decided to pivot and spent
						that December pivoting to another business opportunity. We pivoted for these three reasons:
						<ol>
							<li>The seasonal nature of the textbook industry was not ideal for a startup.</li>
							<li>
								Publishers were starting to partner directly with universities to offer a great
								program for students to save them money while still providing revenue for themselves.
							</li>
							<li>
								Those above two added up to us no longer having the passion needed to run a startup.
							</li>
						</ol>
					</p>
				</div>
				<div className="section">
					<h4>Professional Networking</h4>
					<p>
						In January of 2021, Drivense Connect was born. Our goal was to bring professional networking
						to the 21st century. Starting with business cards, we wanted to help people create meaningful
						connections by making the perfect first impression. The physical card combines the look and
						feel of credit cards with the utility of a business card. Using what we learned since 2018, our
						first step was to talk with those who would be our customers. My team and I reached out to our
						LinkedIn connections to learn about their current business card solutions and if there's any
						challenges or problems. The app and card we are building is a result of those conversations.
						We will be launching in a few weeks!
					</p>
				</div>
			</section>
		)
	}
}

class Projects extends Component {
	render() {
		return (
			<div className='projects' id='projects'>

				<h2>Projects</h2>
				<hr />

				<div className='item'>
					<div className='text'>
						<h4>A Stellar Journey</h4>
						<p>
							An infinite runner game where the player uses a rocket ship to fly across the sky and space
							while dodging clouds, airplanes, and UFOs.<br />
							Available on iOS and Android.<br />
							Built using Unity and C#. <br />
							<a href="https://drivense.com/a-stellar-journey.html">Learn More</a>
						</p>
					</div>
					<div className='pictures'>
						<img src="./img/AndroidMockup1.png" alt="" />
						<img src="./img/iPhoneMockup1.png" alt="" />
					</div>
				</div>

				<div class="item">
					<div class="text">
						<h4>The Magic Rock</h4>
						<p>
							A randomizer that helps people decide what movie to watch, where to eat when going out, where to
							travel for vacation and more.<br />
							Available on iOS and Android.<br />
							Built using React Native. <br />
							<a href="https://drivense.com/the-magic-rock.html">Learn More</a>
						</p>
					</div>
					<div class="pictures">
						<img src="/img/Phone Home Mockup.png" alt="" />
						<img src="/img/Phone Movie Mockup.png" alt="" />
						<img src="/img/Phone Restaurant Mockup.png" alt="" />
						<img src="/img/Phone TvShow Mockup.png" alt="" />
					</div>
				</div>

			</div>
		)
	}
}