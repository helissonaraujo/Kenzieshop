import styled from 'styled-components';

export const Card = styled.div`
	width: 90%;
	min-height: 380px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 5% 3%;
	border: 2px solid #ffffff;
	border-radius: 8px;
	background-color: #ffffff;
	box-shadow: 0px 0px 10px lightgrey;

	img {
		border-radius: 5px 5px 0 0;
	}

	h3 {
		margin: 15px 10px;
		font-size: 16px;
	}

	h4 {
		margin: 10px 10px;
	}

	button {
		margin: 10px 10px 15px 10px;
		width: 50px;
		height: 40px;
		border: 0;
		border-radius: 6px;
		font-size: 12px;
		font-weight: bold;
		transition: 0.5s;

		:hover {
			background-color: #8d8c8c;
			cursor: pointer;
			color: white;
		}
	}
	.cart {width: 20px; padding: 0 5px 0 0}

	@media (min-width: 768px) {
		width: 30%;
		margin: 2% 1%;
	}

	@media (min-width: 1024px) {
		width: 30%;
		margin: 3% 2% 0% 0%;
	}

	@media (min-width: 2560px) {
		width: 20%;
	}
`;
