import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import PageContent from '../../components/PageContent';

const PostTemplate = ({ content, data }) => {
	const frontmatter = data;

	return (
		<PageContent>
			<h1>{frontmatter.title}</h1>
			<h2>{frontmatter.description}</h2>
			<h2>{frontmatter.date}</h2>

			<ReactMarkdown source={content} />
		</PageContent>
	);
};

PostTemplate.getInitialProps = async (context) => {
	const { technology } = context.query;
	const content = await import(`./content/${technology}.md`);
	const data = matter(content.default);
	return { ...data };
};

export default PostTemplate;
