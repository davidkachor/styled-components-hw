import styled from 'styled-components'
import Button from '../../../styles/Button'

const SearchStyled = styled.form`
	display: flex;
	padding: 20px;
	min-height: 5%;
`

const Input = styled.input.attrs({
	type: 'search',
	placeholder: 'Type city here...',
})`
	width: 70%;
	text-align: center;
	border-top-left-radius: 10px;

	&:focus {
		outline: none;
	}
`
const SearchButton = styled.button.attrs({
	type: 'submit',
})`
	${Button};
	width: 30%;
	font-weight: bold;
	color: white;
	background: linear-gradient(
		140deg,
		rgba(64, 58, 159, 1) 0%,
		rgba(75, 22, 175, 1) 0%,
		rgba(0, 255, 166, 1) 100%
	);
`

const Search = () => {
	return (
		<SearchStyled>
			<Input />
			<SearchButton>Search</SearchButton>
		</SearchStyled>
	)
}

export default Search
