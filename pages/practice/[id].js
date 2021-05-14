import React from 'react';
import PageContent from '../../components/PageContent';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProfessionalPractice = () => {
	const router = useRouter();
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(`/api${router.asPath}`)
			.then((res) => res.json())
			.then((dat) => setData(dat));
	}, [router.asPath]);

	if (data) {
		return (
			<PageContent>
				<h1>{data.name}</h1>
			</PageContent>
		);
	}

	return <></>;
};

export default ProfessionalPractice;
