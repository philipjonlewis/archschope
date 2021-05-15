import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import PageContent from '../../components/PageContent';

const PostTemplate = ({ content, data }) => {
	const frontmatter = data;

	const quickLinks = {
		article1: ['section1', 'section2', 'section3'],
		article2: [
			'section4',
			'section5',
			'section6',
			'section7',
			'section8',
			'section9',
			'section10',
			'section11',
		],
		article3: [
			'section12',
			'section13',
			'section14',
			'section15',
			'section16',
			'section17',
			'section18',
			'section19',
			'section20',
			'section21',
			'section22',
			'section23',
			'section24',
		],
		article4: [
			'section25',
			'section26',
			'section27',
			'section28',
			'section29',
			'section30',
			'section31',
			'section32',
			'section33',
			'section34',
			'section35',
			'section36',
			'section37',
			'section38',
			'section39',
		],
		article5: [
			'section40',
			'section41',
			'section42',
			'section43',
			'section44',
			'section45',
			'section46',
			'section47',
		],
	};

	return (
		<PageContent quickLinks={quickLinks}>
			<div className="notice-orange">
				<p>Add disclaimer here to always check official legal documents</p>
			</div>

			<div className="article-info-container">
				<p>{frontmatter.titleShort}</p>
				<p>{frontmatter.titleLong}</p>
				<p>{frontmatter.description}</p>
			</div>

			<div className="article-content-container">
				<ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />
			</div>
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
