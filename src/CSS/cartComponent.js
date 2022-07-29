import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	width: 90%;

	@media (min-width: 768px) {
		flex-direction: row;
	}

	@media (min-width: 1024px) {
		flex-direction: row;
		width: 80%;
	}
`;

export const ContainerCart = styled.div`
	background-color: #ffffff;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-top: 0px;
	margin-right: 5%;
	border-radius: 15px;

	@media (min-width: 768px) {
		width: 70%;
	}

	@media (min-width: 1024px) {
		width: 80%;
	}

	h3 {
		display: flex;
		justify-content: center;
		font-size: 20px;
	}
`;

export const CardCart = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: scroll;
	width: 100%;
	margin: 0% 5% 3% 5%;

	@media (min-width: 1024px) {
		justify-content: center;
		flex-wrap: wrap;
		overflow: unset;
	}
`;
