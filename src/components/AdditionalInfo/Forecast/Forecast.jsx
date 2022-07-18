import styled from 'styled-components'
import Switch from './Switch/Switch'
import ForecastList from "./ForecastList/ForecastList";

const ForecastStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`

const Forecast = () => {
	return (
		<ForecastStyled>
			<Switch />
            <ForecastList/>
		</ForecastStyled>
	)
}

export default Forecast
