import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const drawerWidth = 240;

const Notifications = () => {
	return (
		<div>
			<AppBar
				position="fixed"
				sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
				color="primary"
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
            Notifications
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Notifications;
