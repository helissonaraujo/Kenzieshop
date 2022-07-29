import styled from 'styled-components';

export const Container = styled.div`
	background-color: #ffffff;
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	h1 {
		font-size: 1.8rem;
		margin: 8px 0;
	}

	span {
		color: #ff0000;
	}

	button {
		margin: 5px 0px 10px 0px;
		width: 100px;
		height: 40px;
		border: 0;
		border-radius: 6px;
		background-color: #8d8c8c;
		font-size: 0.75rem;
		font-weight: bold;
		color: #ffffff;
		transition: 0.5s;

		:hover {
			background-color: #8d8c8c;
			cursor: pointer;
		}
	}

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;

		h1 {
			margin-left: 50px;
		}

		button {
			margin-right: 50px;
		}
	}
`;
