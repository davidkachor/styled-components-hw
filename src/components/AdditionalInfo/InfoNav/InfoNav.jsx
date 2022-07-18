import styled from 'styled-components'
import Button from '../../../styles/Button'

const InfoNavStyled = styled.nav`
	display: flex;
	font-weight: bold;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0 10px;
	border-bottom: solid 2px #ceced0;
`
const Pagination = styled.p`
	color: #373744;
	font-size: 16px;
`
const BtnGroup = styled.div`
	display: flex;
	gap: 20px;
`
const SwitchBtn = styled.button`
	${Button};
	background-color: transparent;
	color: ${props => (props.isActive ? '#484874' : '#a4a4ad')};
	font-size: 16px;
	font-weight: bold;
`
const TranslateBtn = styled.button`
	${Button};
	background: linear-gradient(
		140deg,
		rgba(64, 58, 159, 1) 0%,
		rgba(75, 22, 175, 1) 0%,
		rgba(0, 255, 166, 1) 100%
	);
	color: white;
	font-weight: bold;
	font-size: 16px;
	padding: 10px;
	border-radius: 10px;
`

const InfoNav = () => {
	return (
		<InfoNavStyled>
			<Pagination>My Cities (1/5)</Pagination>
			<BtnGroup>
				<SwitchBtn isActive={true}>Celsius</SwitchBtn>
				<SwitchBtn>Fahrenheit</SwitchBtn>
				<TranslateBtn>Translate</TranslateBtn>
			</BtnGroup>
		</InfoNavStyled>
	)
}

export default InfoNav
