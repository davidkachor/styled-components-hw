import styled from 'styled-components'
import Button from '../../../../styles/Button'

const SwitchStyled = styled.div`
	display: flex;
	gap: 20px;
`

const ForecastBtn = styled.div`
	${Button};
	background-color: transparent;
	color: #a4a4ad;
	font-size: 30px;
	font-weight: bold;

	${props =>
		props.isActive
			? 'background: -webkit-linear-gradient(\n' +
			  '    260deg,\n' +
			  '    rgb(115 111 187) 0%,\n' +
			  '    rgb(70 28 149) 0%,\n' +
			  '    rgb(0 255 166) 100%\n' +
			  '  );\n' +
			  '  -webkit-background-clip: text;\n' +
			  '  -webkit-text-fill-color: transparent;'
			: ''}
`

const Switch = () => {
	return (
		<SwitchStyled>
			<ForecastBtn isActive={true}>Timeline</ForecastBtn>
			<ForecastBtn>Week</ForecastBtn>
		</SwitchStyled>
	)
}

export default Switch
