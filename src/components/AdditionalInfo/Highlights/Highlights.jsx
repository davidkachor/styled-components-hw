import styled from 'styled-components'
import HighlightList from './HighlightList/HighlightList'

const HighlightsStyled = styled.article`
	display: flex;
	flex-direction: column;
	flex: 0 1 auto;
	height: 70%;
`

const Heading = styled.h2`
	background: -webkit-linear-gradient(
		270deg,
		rgb(115 111 187) 0%,
		rgb(70 28 149) 0%,
		rgb(0 255 166) 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 30px;
	font-weight: bold;
	height: 10%;
`

const Highlights = () => {
	return (
		<HighlightsStyled>
			<Heading>Today's highlights</Heading>
			<HighlightList />
		</HighlightsStyled>
	)
}

export default Highlights
