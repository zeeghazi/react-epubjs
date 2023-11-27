import React from "react";
import { Reader } from "src/Reader";
import { ReaderProvider } from "src/providers/ReaderProvider";

const FullPage = () => {
	return (
		<ReaderProvider>
			<div className="relative h-full w-full min-h-screen bg-stone-100 p-4">
				<div className="max-w-6xl mx-auto grid grid-cols-1 gap-4">
					<Reader
						bookUrl="https://uncensoredgreatsebooks.s3.us-east-2.amazonaws.com/Benjamin_Franklin/Benjamin_Franklin@@The_Complete_Works_in_Philosophy,_Politics_and_Morals_of_the_late_Dr._Benjamin_Franklin,_Vol._1_[of_3].epub"
						initialFontSize="110%"
						modal={false}
					/>
				</div>
			</div>
		</ReaderProvider>
	);
};

export default FullPage;
