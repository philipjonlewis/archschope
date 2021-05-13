import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import TableOfContents from './TableOfContents';

const Header = () => {
	const router = useRouter();
	return (
		<div className="header-container">
			<div className="upper-header-container">
				<div className="logo-container">
					<svg
						width="39"
						height="32"
						viewBox="0 0 39 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0)">
							<path
								d="M32 19.2C32 26.24 26.24 32 19.2 32C12.16 32 6.39999 26.24 6.39999 19.2H12.8C12.8 22.72 15.68 25.6 19.2 25.6C22.72 25.6 25.6 22.72 25.6 19.2H32Z"
								fill="#0449AF"
							/>
							<path
								d="M19.2 6.4C26.24 6.4 32 12.16 32 19.2H38.4C38.4 8.56 29.84 0 19.2 0C8.56 0 0 8.56 0 19.2H6.4C6.4 12.16 12.16 6.4 19.2 6.4Z"
								fill="#0449AF"
							/>
						</g>
						<defs>
							<clipPath id="clip0">
								<rect width="38.4" height="32" fill="white" />
							</clipPath>
						</defs>
					</svg>

					<Link href="/">
						<p>archscope.</p>
					</Link>
				</div>
			</div>
			<div className="lower-header-container">
				<div className="lower-header">
					<div className="tagline-container">
						<p>Resources for Future Architects</p>
					</div>
					<div className="link-container">
						<div
							className={
								router.pathname == '/practice'
									? 'link-item link-active'
									: 'link-item'
							}
						>
							<Link href="/practice"> &gt; Practice</Link>
						</div>
						<div
							className={
								router.pathname == '/technology'
									? 'link-item link-active'
									: 'link-item'
							}
						>
							<Link href="/technology"> &gt; Technology</Link>
						</div>
						<div
							className={
								router.pathname == '/utilities'
									? 'link-item link-active'
									: 'link-item'
							}
						>
							<Link href="/utilities"> &gt; Utilities</Link>
						</div>
						<div
							className={
								router.pathname == '/history'
									? 'link-item link-active'
									: 'link-item'
							}
						>
							<Link href="/history"> &gt; History</Link>
						</div>
						<div
							className={
								router.pathname == '/theory'
									? 'link-item link-active'
									: 'link-item'
							}
						>
							<Link href="/theory"> &gt; Theory</Link>
						</div>
						<div
							className={
								router.pathname == '/design'
									? 'link-item link-active'
									: 'link-item'
							}
						>
							<Link href="/design"> &gt; Design</Link>
						</div>
					</div>
				</div>
			</div>
			<TableOfContents />
		</div>
	);
};

export default Header;
