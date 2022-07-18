import PropTypes from 'prop-types'
import styled from 'styled-components'

const ForecastItemStyled = styled.section`
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: white;
	border-radius: 10px;
	width: 100px;
	height: 100px;
	text-align: center;
`

const ForecastImg = styled.img.attrs({
	alt: 'weather-icon',
	width: '30',
})`
	margin: 0 auto;
	width: 50px;
`

const Temperature = styled.h2`
	margin-top: 5px;
	font-weight: bold;
	color: #373744;
	font-size: 20px;
`
const Time = styled.p`
	font-size: 12px;
	margin-top: 3px;
`

const ForecastItem = props => {
	return (
		<ForecastItemStyled>
			<ForecastImg src={props.imgSrc} />
			<Temperature>{props.temperature}</Temperature>
			<Time>{props.time}</Time>
		</ForecastItemStyled>
	)
}

ForecastItem.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	temperature: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
}

export default ForecastItem
