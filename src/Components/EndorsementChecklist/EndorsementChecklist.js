import React from 'react';
import Logo from './Logo';
import './endorsement.scss';

const EndorsementChecklist = props => {
	return (
		<div>
			<div style={{ marginBottom: '5px', marginTop: '0' }}>
				<h3 style={{ color: '#BB1B33' }}>
					<b>Careers Endorsement: Web Dev</b>
				</h3>
				<p style={{ margin: '0 20%' }}>
					By the time you finish Labs, your career materials should be “endorsed” by a Lambda career coach.
					Career endorsement means you have completed all requisite materials associated with your career
					lessons to date, and is a signal that you are ready for more in-depth technical interview
					preparation. Once you have earned your careers endorsement, along with your technical endorsement
					and teamwork and collaboration endorsement, you will gain access to our pipeline of partners who
					want to meet, interview, and hire Lambda grads.{' '}
				</p>
			</div>
			<div style={{ display: 'flex', marginTop: '50px', justifyContent: 'center' }}>
				<div style={{ width: '48%', textAlign: 'left' }}>
					<h5 style={{ color: '#032678' }}> CHECKLIST FOR ARTIFACTS NEEDED FOR CAREERS ENDORSEMENT: </h5>

					<p>
						<b>
							❏ An updated and edited resume (1 page) tailored to your career track. Resume should
							have:
							</b>
					</p>
					<ul style={{ listStyleType: 'none' }}>
						<li>❏ “Skills” section with all the technologies you have learned listed</li>
						<li>❏ “Projects” section featuring the following information:</li>
						<li>
							Project Title (hyperlink to deployed project) One sentence to describe what the project
								does Tech Stack | Tech | Tech | Tech{' '}
						</li>
						<ul>
							<li>
								{' '}
								Sentence describing deadline (# of weeks), how many people on the team, and your
									contributions{' '}
							</li>
							<li> Sentence describing how you used a technology </li>
							<li> GitHub Repo/front end/back end link</li>
						</ul>
						<li>
							❏ “Employment” section with power statements describing transferable skills from
							previous jobs
							</li>
						<li>❏ “Education” section featuring Lambda School and previous schooling </li>
						<li>
							❏ Additional sections deemed necessary by coach, such as summary, achievements,
							activities, etc.
							</li>
					</ul>
					<p>
						<b>❏ Updated LinkedIn profile, including: </b>
					</p>
					<ul style={{ listStyleType: 'none' }}>
						<li>❏ A clear headshot and cover photo </li>
						<li>
							❏ Personal summary to let people get to know you- reference your portfolio site here{' '}
						</li>
						<li>
							❏ Work experiences, with descriptions (only include Lambda under work if you were a PM){' '}
						</li>
						<li>
							❏ Projects, which LI categorizes under “accomplishments” section. Highlight personal,
								build week, and labs projects, with a link for any deployed projects{' '}
						</li>
						<li>❏ Education, featuring Lambda School and any previous schooling </li>
					</ul>
					<p>
						<b>❏ Green GitHub with quality contributions, including: </b>
					</p>
					<ul style={{ listStyleType: 'none' }}>
						<li>❏ A clear headshot and professional user handle </li>
						<li>
							❏ Top six pinned projects should include any open source contributions and your Build
								Week or Labs projects{' '}
						</li>
						<li>❏ Weekly contributions to show ongoing commitment to skills-building</li>
					</ul>
					<p>
						<b>
							❏ Original portfolio website (no templates from drag & drop website builders like wix),
							including:
							</b>
					</p>
					<ul style={{ listStyleType: 'none' }}>
						<li>
							❏ Your own domain name (no subdomains), purchased through namecheap or other site. Ask a
								career coach for a free purchase code to namecheap.com.{' '}
						</li>
						<li>❏ Long-form written descriptions of your projects and technical learning/progress</li>
						<li>❏ Links to LinkedIn, GitHub, Medium, and any other relevant artifacts</li>
						<li>❏ All Build Weeks and Labs projects with links to code in GitHub</li>
					</ul>
					<h5 style={{ color: '#032678' }}>OTHER STEPS TO EARN YOUR CAREERS ENDORSEMENT:</h5>
					<ul>
						<li>❏ All careers assignments have been completed and met expectations</li>
						<li>❏ Passed one SkilledInc. interview and completed three Pramp interviews</li>
						<li>❏ Social media and other online presence is relevant and professional</li>
					</ul>
				</div>
				<div style={{ width: '50%' }}>
					<Logo className="logo " />
				</div>
			</div>
		</div>
	);
};

export default EndorsementChecklist;
