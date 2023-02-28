import React, { useState } from "react"
import SofiaLyrics from "../Lyrics/SofiaLyrics"
import PlasticLoveLyrics from "../Lyrics/PlasticLoveLyrics"
import RichFlexLyrics from "../Lyrics/RichFlexLyrics"
import Track1 from "../Tracks/track1.mp3"
import Track2 from "../Tracks/track2.mp3"
import Track3 from "../Tracks/track3.mp3"

const MusicPlayerContext = React.createContext()

const defaultValues = {
	audioPlayer: new Audio(),
	tracks: [
		{
			name: "Sofia",
			author: "Clairo",
			file: Track1,
			imgURL:
				"https://lh3.googleusercontent.com/42I6K4hjToTNUZvC3MwwNEU0CQgW-DPVZrIrOZNb1EmducrjYOlmkCoh1WyExrm2IEwt8dfuncoB5lk=w544-h544-l90-rj",
			lyrics: SofiaLyrics,
		},
		{
			name: "Plastic Love",
			author: "Mariya Takeuchi",
			file: Track2,
			imgURL:
				"https://lh3.googleusercontent.com/pVx58i3ZhmQExO9TYgWgoglv6IuqMKqF4zarGX7xkyQSVb52UyGoGeYqXfWiqe1_r4bK1hJ9M8h0bcACzg=w544-h544-l90-rj",
			lyrics: PlasticLoveLyrics,
		},
		{
			name: "Rich Flex",
			author: "Drake, 21 Savage",
			file: Track3,
			imgURL:
				"https://lh3.googleusercontent.com/OIbJGy6eDwoWPQejSu1Ug7VK-f3RTMl3va0Nk_qeFDNct4Hkq073KT-Zno0Y2UOpx7hBMWwXaf41nvv7=w544-h544-l90-rj",
			lyrics: RichFlexLyrics,
		},
	],
	currentTrackIndex: null,
	isPlaying: false,
}

const MusicPlayerProvider = ({ children }) => {
	const [state, setState] = useState(defaultValues)
	return (
		<MusicPlayerContext.Provider value={{ state, setState }}>
			{children}
		</MusicPlayerContext.Provider>
	)
}

export { MusicPlayerContext, MusicPlayerProvider }
