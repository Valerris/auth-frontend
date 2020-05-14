import React from "react";
import Link from "./Link/Link";

const links = ({ links }) => {
	const linksList = (
		<ul>
			{links.map((link) => (
				<Link key={link.href} link={link} />
			))}
		</ul>
	);

	return linksList;
};

export default links;
