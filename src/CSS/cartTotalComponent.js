import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 300px;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 50px;
	border-radius: 15px;

	@media (min-width: 1024px) {
		width: 40%;
	}

	h2 {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 60px;
		margin-top: 0px;
		background-color: #f5f5f5;

		@media (min-width: 768px) {
			font-size: 17px;
		}

		@media (min-width: 1024px) {
			font-size: 22px;
		}
	}

	span {
		font-size: 20px;

		@media (min-width: 768px) {
			font-size: 16px;
		}

		@media (min-width: 1024px) {
			font-size: 20px;
		}
	}

	button {
		margin-bottom: 20px;
		width: 180px;
		height: 40px;
		border: 0;
		border-radius: 3px;
		background-color: #242424;
		font-size: 0.75rem;
		font-weight: bold;
		color: #ffffff;
		transition: 0.5s;

		@media (min-width: 768px) {
			width: 120px;
		}

		@media (min-width: 1024px) {
			width: 160px;
		}

		:hover {
			background-color: #8d8c8c;
			cursor: pointer;
		}
	}
`;
