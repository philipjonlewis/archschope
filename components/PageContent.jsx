import React from 'react';
import InfoPanel from './InfoPanel';

const PageContent = ({ children }) => {
	return (
		<div className="page-content-container">
			<div className="page-content">
				<InfoPanel />
				<div className="article-container">{children}</div>
			</div>
		</div>
	);
};

export default PageContent;
