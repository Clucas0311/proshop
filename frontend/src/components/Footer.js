import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<main>
						<Col className="text-center py-3">Copyright &copy; ProShop</Col>
					</main>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
