import styled from 'styled-components';

export const GuestButtonWrapper = styled.div`
	display: inline-block;
	background-color: #f8f4e3;
	font-size: 25px;
	font-weight: 700;
	text-align: center;
	border-radius: 7px;
	border: 1.5px solid #343a40;
	transition: all 0.2s ease;
	cursor: pointer;
	margin-bottom: 40px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	color: black;
	padding: 13px;

	&:hover {
		background-color: #343a40;
		color: #fbfbf2;
		border: 1.5px solid transparent;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}

	@media only screen and (min-width: 675px) {
		margin-bottom: 0;
	}
`;
