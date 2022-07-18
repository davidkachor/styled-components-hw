import styled from 'styled-components'
import PropTypes from 'prop-types'

const ItemStyled = styled.section`
	display: flex;
	flex-direction: ${props => (props.isComposed ? 'row' : 'column')};
	background-color: white;
	border-radius: 10px;
	width: 32%;
	height: 45%;
	justify-content: center;
	align-items: center;
`
const ItemSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;

	${props =>
		props.isDark &&
		'background: linear-gradient(\n' +
			'    140deg,\n' +
			'    rgba(64, 58, 159, 1) 0%,\n' +
			'    rgba(75, 22, 175, 1) 0%,\n' +
			'    rgba(0, 255, 166, 1) 100%\n' +
			'  );\n' +
			'  color: white;\n' +
			'  border-top-right-radius: 10px;\n' +
			'  border-bottom-right-radius: 10px;'}
`
const Heading = styled.h2`
	font-weight: bold;
`
const Image = styled.img.attrs({
	alt: 'icon',
	width: '30',
})`
	width: 50px;
	margin: 10px auto;
`
const Value = styled.p`
	font-size: ${props => (props.isComposed ? '20px' : '14px')};
	${props => (props.isComposed ? 'font-weight: bold;' : '')}
`

const HighlightItem = props => {
	if (props?.isComposed) {
		return (
			<ItemStyled isComposed={true}>
				<ItemSection>
					<Image src={props.img[0]} />
					<Value isComposed={true}>{props.value[0]}</Value>
				</ItemSection>
				<ItemSection isDark>
					<Image src={props.img[1]} />
					<Value isComposed={true}>{props.value[1]}</Value>
				</ItemSection>
			</ItemStyled>
		)
	} else
		return (
			<ItemStyled>
				<Heading>{props.heading}</Heading>
				<Image src={props.img} />
				<Value>{props.value}</Value>
			</ItemStyled>
		)
}

HighlightItem.propTypes = {
	isComposed: PropTypes.bool,
	heading: PropTypes.string,
	value: PropTypes.arrayOf(PropTypes.string),
	img: PropTypes.arrayOf(PropTypes.string),
}

export default HighlightItem
