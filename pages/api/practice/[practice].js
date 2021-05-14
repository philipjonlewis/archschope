// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useRouter } from 'next/router';

export default (req, res) => {
	const { practice } = req.query;

	res.status(200).json({ name: practice });
};
