import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	overflow: scroll;
	width: 100%;
	margin-top: 100px;

	@media (min-width: 1024px) {
		flex-wrap: wrap;
		justify-content: center;
		overflow: unset;
		margin-bottom: 40px;
	}
`;
