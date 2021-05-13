import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const TableOfContents = () => {
	const router = useRouter();
	const [content, setcontent] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const [masterLinks, setMasterLinks] = useState([
		'/practice',
		'/technology',
		'/utilities',
		'/history',
		'/theory',
		'/design',
	]);

	const isRouteForApi = masterLinks.includes(router.pathname);

	useEffect(() => {
		if (router.pathname !== '/' && isRouteForApi) {
			return fetch('/api' + router.pathname)
				.then((res) => {
					return res.json();
				})
				.then((dat) => {
					setcontent(dat);
					setIsLoading(false);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [router.pathname]);

	if (!isLoading && router.pathname !== '/') {
		return (
			<div className="tableOfContents-container">
				<div className="contents">
					<div className="content-title">
						<p>{content.subject}</p>
					</div>

					<div className="content-table">
						{content.tableOfContents.map((table) => {
							return (
								<div
									className="table"
									key={content.tableOfContents.indexOf(table)}
								>
									{table.map((link) => {
										return (
											<Link href={link.url} key={link.url}>
												{link.title}
											</Link>
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	} else {
		return <></>;
	}

	// return <div className="tableOfContents-container"></div>;
};

export default TableOfContents;
