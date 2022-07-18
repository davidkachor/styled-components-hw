import styled from 'styled-components'
import Search from './Search/Search'
import WeatherInfo from './WeatherInfo/WeatherInfo'

const MainInfoStyled = styled.article`
	display: flex;
	flex-direction: column;
	width: 350px;
	background-color: #373744;
	position: relative;
`

const CityImg = styled.img.attrs({
	src: 'https://all.accor.com/magazine/imagerie/1-0684.jpg',
	alt: 'city',
	width: '300',
})`
	position: absolute;
	bottom: 0;
	width: 100%;
	filter: brightness(50%);
`

const MainInfo = () => {
	return (
		<MainInfoStyled>
			<Search />
			<WeatherInfo />
			<CityImg />
		</MainInfoStyled>
	)
}

export default MainInfo
