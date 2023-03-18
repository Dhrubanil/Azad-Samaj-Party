import { CardActions, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { serverBasePath } from '../../server_ip'

const AzadSpeaks = () => {
	const [speaks, setSpeaks] = useState([]);

	const getAzadSpeaks = async () => {
		try {
			const url = `${serverBasePath}/api/current-issues`;
			console.log("url", url);
			const res = await axios.get(url, {
				params: {
					populate: "*",
				},
			});
			console.log("res", res.data.data);
			setSpeaks(res.data.data);
		} catch (e) { }
	};

	useEffect(() => {
		getAzadSpeaks();
	}, []);
	return (
		<div>
			<Divider />
			<Box sx={{ flexGrow: 1 }} className="azad_speaks">
				<Grid style={{ marginTop: '2%' }} container spacing={1}>

					{speaks.map((c, i) => (
						<Grid sx={{ paddinTop: '3%' }} item xs={3}>
							<Card key={c.id} className='azadspeaks_card' sx={{ maxWidth: 345, maxHeight: 600 }} style={{ height: i == 0 ? 600 : 300 }}>
								<CardMedia
									sx={{ height: '80%' }}
									image={`${serverBasePath}${c.attributes.issue.data.attributes.url}`}
									title="green iguana"
								/>
								<CardContent className="card_content">
									<Typography variant="body2" color="white">
										{c.attributes.Description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	)
}

export default AzadSpeaks