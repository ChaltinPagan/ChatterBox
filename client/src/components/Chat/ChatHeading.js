import React from 'react';
import MdEject from 'react-icons/lib/md/eject'

export default function({name, numberOfUsers, usersOnline, logout, user, show}) {
	return (
		<div className="chat-header">
			<div className="user-info">
				{/* <div className="user-name">{name}</div> */}
				<div className="users-online"><b>{usersOnline}</b></div>
				
				<div className="status">
					<div className="indicator"></div>
					<span>{numberOfUsers ? numberOfUsers : null}</span>
				</div>
			</div>
			{/* <div className="user-show" id="userShow">{show}</div> */}
			<div>
			<div onClick={()=>{logout()}} title="Logout" className="logout">
			LOGOUT
			<MdEject/>	
		</div>
			</div>
		</div>
	);
	
}
