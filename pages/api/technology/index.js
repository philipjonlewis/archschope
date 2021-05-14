// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	const technologyContent = {
		subject: 'Building Technology',
		tableOfContents: [
			[
				{
					title: 'Civil Works',
					url: '/technology/civilworks',
				},
				{
					title: 'Carpentry and Joinery',
					url: '/technology/carpentryandjoinery',
				},
				{
					title: 'Concrete & Masonry',
					url: '/technology/concreteandmasonry',
				},
				{
					title: 'Sheet Metal & Tinsmithry',
					url: '/technology/sheetmetal',
				},
				{
					title: 'Structural Steel',
					url: '/technology/structuralsteel',
				},
				{
					title: 'Concrete & Reinforced Concrete',
					url: '/technology/reinforcedconcrete',
				},
			],
			[
				{
					title: 'Waterproofing, Damproofing & Insulation',
					url: '/technology/proofingandinsulation',
				},
				{
					title: 'Glass & Glazing',
					url: '/technology/glassandglazing',
				},
				{
					title: 'Painting & Varnishing',
					url: '/technology/paintingandvarnishing',
				},
				{
					title: 'Doors & Windows',
					url: '/technology/doorsandwindows',
				},
				{
					title: 'Hardware',
					url: '/technology/hardware',
				},
				{
					title: 'Specialized Works',
					url: '/technology/specializedworks',
				},
			],
		],
	};

	res.status(200).json(technologyContent);
};
