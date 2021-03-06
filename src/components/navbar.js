import React from 'react';

const NavBar = ({ score, topScore, message }) => {
	return (
		<div className='navbar-fixed'>
			<nav>
				<div className='nav-wrapper row black center-align flow-text'>
					<div className='col s4'>
						<a href='/'><b className='red-text'>Clicky Game</b></a>
					</div>
					<div className='col s4'>
						<span>{message}</span>
					</div>
					<div className='col s4'>
						<span className='red-text'>Score: {score} | Top Score: {topScore}</span>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;