import styled from 'styled-components'
import MainInfo from './components/MainInfo/MainInfo'
import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo'

const Main = styled.main`
	display: flex;
	height: 100vh;
`

function App() {
	return (
		<Main>
			<MainInfo />
			<AdditionalInfo />
		</Main>
	)
}

export default App
