import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import PageContent from '../../components/PageContent';

const PostTemplate = ({ content, data }) => {
	const frontmatter = data;

	return (
		<PageContent>
			<div className="notice-orange">
				<p>Add disclaimer here to always check official legal documents</p>
			</div>

			{/* {frontmatter.titleShort} */}

			<ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />
		</PageContent>
	);
};

PostTemplate.getInitialProps = async (context) => {
	const { practice } = context.query;
	const content = await import(`./content/${practice}.md`);
	const data = matter(content.default);
	return { ...data };
};

export default PostTemplate;
