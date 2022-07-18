import styled from 'styled-components'
import HighlightItem from './HighlightItem/HighlightItem'

const ListStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: center;
	gap: 10px;
	height: 90%;
`

const HighlightList = () => {
	return (
		<ListStyled>
			<HighlightItem
				heading={'Humidity'}
				value={['31%']}
				img={['https://cdn-icons-png.flaticon.com/512/5247/5247709.png']}
			/>
			<HighlightItem
				heading={'Pressure'}
				value={['1020hPa']}
				img={['https://cdn-icons-png.flaticon.com/512/1839/1839341.png']}
			/>
			<HighlightItem
				isComposed={true}
				value={['23°', '33°']}
				img={[
					'https://cdn-icons-png.flaticon.com/512/1684/1684374.png',
					'https://cdn-icons-png.flaticon.com/512/1684/1684375.png',
				]}
			/>
			<HighlightItem
				heading={'Cloud Coverage'}
				value={['31%']}
				img={['https://cdn-icons-png.flaticon.com/512/166/166015.png']}
			/>
			<HighlightItem
				heading={'Wind Speed'}
				value={['2.56m/s']}
				img={['https://cdn-icons-png.flaticon.com/512/3050/3050874.png']}
			/>
			<HighlightItem
				isComposed={true}
				value={['6:58', '21:43']}
				img={[
					'https://cdn-icons-png.flaticon.com/512/1113/1113776.png',
					'https://cdn-icons-png.flaticon.com/512/1113/1113777.png',
				]}
			/>
		</ListStyled>
	)
}

export default HighlightList
