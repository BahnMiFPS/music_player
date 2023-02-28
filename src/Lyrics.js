import { Box, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import axios from "axios"

function Lyrics({ currentTrackLyrics }) {
	// Hard-coding because i cant find a working lyrics API after 3hrs searching T_T

	return (
		<Box height={"250px"} sx={{ overflowY: "scroll" }}>
			<Typography variant="subtitle2" sx={{ whiteSpace: "pre-line" }}>
				{currentTrackLyrics}
			</Typography>
		</Box>
	)
}

export default Lyrics
