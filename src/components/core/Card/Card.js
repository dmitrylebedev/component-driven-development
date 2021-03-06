import React from 'react';
import Flex from '../Flex';
import Box from '../Box';
import Stack from '../Stack';
import { color, border, borderColor, borderRadius } from 'styled-system';
import styled from 'styled-components';
import Macro from 'macro-components';

const CardBase = styled(Flex)`
	${color};
	${border};
	${borderColor};
	${borderRadius};
	list-style: none;
`;

CardBase.defaultProps = {
	bg: 'bg',
	border: 'thin',
	borderColor: 'grey.2',
	borderRadius: 'base',
	flexDirection: 'column',
};

const Cover = ({ children }) => children;
const Body = ({ children }) => <div>{children}</div>;
const Footer = ({ children }) => <Box mt="auto">{children}</Box>;

const Card = Macro({ Cover, Body, Footer })(
	({ Cover, Body, Footer }, props) => (
		<CardBase {...props}>
			{Cover}
			<Stack height="100%" p={4} gap={4}>
				{Body}
				{Footer}
			</Stack>
		</CardBase>
	)
);

export default Card;
