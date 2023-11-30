import React from "react";
import Modal from "./examples/Modal";
import FullPage from "./examples/FullPage";

const App = () => {
	// const Franklin =
	// 	"https://uncensoredgreatsebooks.s3.us-east-2.amazonaws.com/Benjamin_Franklin/Benjamin_Franklin@@The_Complete_Works_in_Philosophy,_Politics_and_Morals_of_the_late_Dr._Benjamin_Franklin,_Vol._1_[of_3].epub";

	// const Alice = "/alice.epub";

	return (
		<div>
			<FullPage />
			<Modal />
		</div>
	);
};

export default App;
