import styled from 'styled-components'
import ForecastItem from './ForecastItem/ForecastItem'

const ForecastListStyled = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 10px;
	justify-content: space-between;
	margin: 10px 0;
`

const ForecastList = () => {
	return (
		<ForecastListStyled>
			<ForecastItem
				imgSrc={'https://cdn-icons-png.flaticon.com/512/1146/1146881.png'}
				temperature={'23°'}
				time={'09:00'}
			/>
			<ForecastItem
				imgSrc={'https://cdn-icons-png.flaticon.com/512/1146/1146869.png'}
				temperature={'28°'}
				time={'12:00'}
			/>
			<ForecastItem
				imgSrc={'https://cdn-icons-png.flaticon.com/512/4814/4814268.png'}
				temperature={'32°'}
				time={'15:00'}
			/>
			<ForecastItem
				imgSrc={'https://cdn-icons-png.flaticon.com/512/4814/4814268.png'}
				temperature={'33°'}
				time={'18:00'}
			/>
			<ForecastItem
				imgSrc={'https://cdn-icons-png.flaticon.com/512/1146/1146900.png'}
				temperature={'30°'}
				time={'21:00'}
			/>
		</ForecastListStyled>
	)
}

export default ForecastList
