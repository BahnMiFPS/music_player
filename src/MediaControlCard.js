import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import SkipNextIcon from "@mui/icons-material/SkipNext"
import useMusicPlayer from "./hooks/useMusicPlayer"
import PauseIcon from "@mui/icons-material/Pause"
import PauseCircleIcon from "@mui/icons-material/PauseCircle"
import { PlayCircleFilled } from "@mui/icons-material"

export default function MediaControlCard() {
	const {
		currentTrackAuthor,
		currentTrackName,
		currentTrackImg,
		currentTrackIndex,
		playPreviousTrack,
		playNextTrack,
		isPlaying,
		togglePlay,
	} = useMusicPlayer()

	console.log(currentTrackIndex)
	return (
		<Card
			className="controller-card"
			sx={{
				display: "flex",
				fontFamily: "Urbanist",
				boxShadow: "none",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					alignItems: "center",
					border: "none",
				}}
			>
				<CardContent
					sx={{
						alignItems: "center",
						justifyContent: "center",
						border: "none",
					}}
				>
					<CardMedia
						component="img"
						sx={{ width: 151 }}
						image={
							currentTrackIndex === null
								? "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/hcjrqlvc6dfhpjxob9nt/cudi?fimg-ssr-default"
								: currentTrackImg
						}
						className="current-song-cover"
					/>
					<Typography
						component="div"
						marginTop={1}
						fontWeight={"700"}
						fontSize={"1.2rem"}
					>
						{currentTrackIndex === null ? "Music Player" : currentTrackName}
					</Typography>
					<Typography variant="subtitle3" color="text.secondary">
						by {currentTrackIndex === null ? "BahnMiFPS" : currentTrackAuthor}
					</Typography>
				</CardContent>
				<Box sx={{ display: "flex", alignItems: "center", border: "none" }}>
					<IconButton
						aria-label="previous"
						color="primary"
						onClick={playPreviousTrack}
						disabled={currentTrackIndex === null ? true : false}
					>
						<SkipPreviousIcon />
					</IconButton>
					<IconButton
						aria-label="play/pause"
						color="primary"
						onClick={togglePlay}
						disabled={currentTrackIndex === null ? true : false}
					>
						{isPlaying ? (
							<PauseCircleIcon sx={{ height: 38, width: 38, border: "none" }} />
						) : (
							<PlayCircleFilled
								sx={{ height: 38, width: 38, border: "none" }}
							/>
						)}
					</IconButton>
					<IconButton
						aria-label="next"
						color="primary"
						onClick={playNextTrack}
						disabled={currentTrackIndex === null ? true : false}
					>
						<SkipNextIcon />
					</IconButton>
				</Box>
			</Box>
		</Card>
	)
}
