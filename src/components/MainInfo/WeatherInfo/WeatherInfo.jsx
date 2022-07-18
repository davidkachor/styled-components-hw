import styled from 'styled-components'

const WeatherInfoStyled = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	color: white;
	height: 70%;
	z-index: 10;
`
const Day = styled.h2`
	font-size: 40px;
	font-weight: bold;
	margin-top: 30px;
`

const Status = styled.p`
	font-style: italic;
`

const StatusImg = styled.img.attrs({
	src: 'https://cdn-icons-png.flaticon.com/512/1146/1146881.png',
	alt: 'weather',
	width: '130',
})`
	margin: 30px auto 0;
`

const Temperature = styled.div`
	background: linear-gradient(
		140deg,
		rgba(64, 58, 159, 1) 0%,
		rgba(75, 22, 175, 1) 0%,
		rgba(0, 255, 166, 1) 100%
	);
	width: 100px;
	height: 100px;
	margin: 30px auto 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	font-weight: bold;
	font-size: 40px;
`

const City = styled.p`
	margin-top: 25px;
`

const WeatherInfo = () => {
	return (
		<WeatherInfoStyled>
			<Day>Thursday</Day>
			<Status>"scattered clouds"</Status>
			<StatusImg />
			<Temperature>
				<p>23°</p>
			</Temperature>
			<City>Madrid (ES)</City>
		</WeatherInfoStyled>
	)
}

export default WeatherInfo
