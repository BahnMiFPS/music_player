import { MusicPlayerProvider } from "./contexts/MusicPlayerContext"
import "./App.css"
import MediaControlCard from "./MediaControlCard"
import TrackList from "./TrackList"
import { Container, createTheme, Divider, ThemeProvider } from "@mui/material"

const App = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#06c149",
			},
		},
	})
	return (
		<ThemeProvider theme={theme}>
			<MusicPlayerProvider>
				<Container
					sx={{ background: "#fff", minWidth: "350px", minHeight: "600px" }}
				>
					<MediaControlCard />
					<Divider sx={{ marginBottom: "1rem" }} />
					<TrackList />
				</Container>
			</MusicPlayerProvider>
		</ThemeProvider>
	)
}

export default App
