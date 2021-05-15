import React from 'react';
import InfoPanel from './InfoPanel';

const PageContent = ({ children, quickLinks }) => {
	// quickLinks is the table of content contents
	return (
		<div className="page-content-container">
			<div className="page-content">
				{/* make a separate component for quicklinks */}
				<InfoPanel />
				<div className="article-container">{children}</div>
			</div>
		</div>
	);
};

export default PageContent;
