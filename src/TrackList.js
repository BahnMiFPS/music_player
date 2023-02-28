import React, { useState } from "react"
import useMusicPlayer from "./hooks/useMusicPlayer"
import "./App.css"
import { Grid, IconButton, Typography, Button, Box } from "@mui/material"
import { fontFamily } from "@mui/system"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded"
import { PlayCircleFilled } from "@mui/icons-material"
import LyricComponent from "./Lyrics"

function TrackList() {
	const { trackList, playTrack, currentTrackName, currentTrackLyrics } =
		useMusicPlayer()
	const [isSong, setIsSong] = useState(true)
	const [lyrics, setLyrics] = useState(null)

	console.log(isSong)
	return (
		<Grid
			className="track-list"
			display={"flex"}
			flexDirection={"column"}
			width={"100%"}
			height="100%"
		>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Button onClick={() => setIsSong(true)}>
					<Typography variant="overline" fontWeight={700}>
						Songs
					</Typography>
				</Button>
				<Button onClick={() => setIsSong(false)}>
					<Typography variant="overline" fontWeight={700}>
						Lyrics
					</Typography>
				</Button>
			</Box>
			{isSong ? (
				<>
					{trackList.map((track, index) => (
						<Box
							key={index}
							className="song-wrapper"
							width={"100%"}
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Box
								className="song-title-author"
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<CardContent>
									<CardMedia
										component="img"
										sx={{
											width: 50,
											margin: "0 auto",
											borderRadius: "20px",
										}}
										image={track.imgURL}
									/>
								</CardContent>
								<Box
									className="song-title-author"
									sx={{
										display: "flex",
										flexDirection: "column",
										textAlign: "left",
									}}
								>
									<Typography
										className="song-title"
										variant="h7"
										fontWeight={"700"}
									>
										{track.name}
									</Typography>
									<Typography
										className="song-author"
										variant="body3"
										fontSize={"0.8rem"}
									>
										{track.author}
									</Typography>
								</Box>
							</Box>
							<IconButton
								color="primary"
								onClick={() => {
									playTrack(index)
								}}
							>
								<PlayCircleFilled />
							</IconButton>
						</Box>
					))}
				</>
			) : (
				<LyricComponent currentTrackLyrics={currentTrackLyrics} />
			)}
		</Grid>
	)
}

export default TrackList
