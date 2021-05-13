import '../styles/main.scss';
import '../styles/components/header.scss';
import '../styles/components/footer.scss';
import '../styles/components/pageContent.scss';
import '../styles/components/infoPanel.scss';
import '../styles/components/tableOfContents.scss';
import '../styles/components/pages/practice.scss';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
