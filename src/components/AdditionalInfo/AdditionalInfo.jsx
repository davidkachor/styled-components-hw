import styled from 'styled-components'
import InfoNav from './InfoNav/InfoNav'
import Forecast from './Forecast/Forecast'
import Highlights from './Highlights/Highlights'

const AdditionalInfoStyled = styled.article`
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	min-width: calc(100% - 350px);
	background-color: #e7e7e7;
`

const AdditionalInfo = () => {
	return (
		<AdditionalInfoStyled>
			<InfoNav />
			<Forecast />
			<Highlights />
		</AdditionalInfoStyled>
	)
}

export default AdditionalInfo
