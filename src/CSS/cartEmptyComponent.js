import styled from 'styled-components';

export const Container = styled.div`
	margin-bottom: 6%;

	@media (min-width: 768px) {
		margin-bottom: 200px;
	}

	@media (min-width: 1024px) {
		flex-direction: row;
		margin-bottom: 170px;
	}
`;
