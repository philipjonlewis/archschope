// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	const practiceContent = {
		subject: 'Professional Practice',
		tableOfContents: [
			[
				{
					title: 'R.A. 9266 - The Architecture Act of 2004',
					url: '/practice/ra9266',
				},
				{
					title: 'R.A. 9514 - Revised Fire Code',
					url: '/practice/ra9514',
				},
				{
					title:
						'R.A. 9904 - Magna Carta for Homeowners & Homeowners Associations',
					url: '/practice/ra9904',
				},
				{
					title: 'P.D. 1096 - National Building Code',
					url: '/practice/pd1096',
				},
				{
					title:
						'P.D. 957 - The Subdivision & Condominium Buyer’s Protective Decree',
					url: '/practice/pd957',
				},
				{
					title: 'B.P. 220 - Economic & Socialized Housing',
					url: '/practice/bp220',
				},
				{
					title: 'B.P. 344 - Accessibility Law',
					url: '/practice/bp344',
				},
			],
			[
				{
					title:
						'United Architects of the Philippines - Standards of Professional Practice',
					url: '/sppdocs',
				},
				{
					title: 'Comparative Analysis',
					url: '/comparativeanalysis',
				},
			],
		],
	};

	res.status(200).json(practiceContent);
};

/*
{
	subject:"subject name",
	tableOfContents:[
		[
			{
			title: 'R.A. 9266 - The Architecture Act of 2004',
			url: '/ra9266',
			},
		],
		[
			{
			title: 'United Architects of the Philippines - Standards of Professional
								Practice',
			url: '/sppdocs',
			},
		]
	]
}


*/
