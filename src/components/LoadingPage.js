import React from "react";
import loader from "../../public/images/loader.gif";
const LoadingPage = () => {
	return (
		<div className="loader">
			<img className='"loader__image"' src={loader} alt="" />
		</div>
	);
};

export default LoadingPage;
