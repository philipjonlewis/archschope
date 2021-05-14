// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useRouter } from 'next/router';

export default (req, res) => {
	const router = useRouter();

	console.log(router.pathname);
	res.status(200).json({ name: 'Building Utilities dynamic' });
};
