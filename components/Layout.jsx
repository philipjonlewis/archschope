import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<div className="site-container">
			<Head>
				<title>archscope. | Resources for Future Architects</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
