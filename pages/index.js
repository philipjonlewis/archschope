import Head from 'next/head';

import { useEffect } from 'react';

export default function Home() {
	return (
		<div className="homepage-container">
			<div className="homepage-contents">
				<div className="improvement-container">
					<p>Help Improve This Page</p>
				</div>
				<div className="updates-container">
					<h1>This is the home page</h1>
				</div>
			</div>
		</div>
	);
}
