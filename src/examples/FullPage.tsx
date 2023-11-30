import React from "react";
import { Reader } from "src/Reader";
import { ReaderProvider } from "src/providers/ReaderProvider";

const FullPage = () => {
	return (
		<ReaderProvider>
			<div className="relative h-full w-full min-h-screen bg-stone-100 p-4">
				<div className="max-w-6xl mx-auto grid grid-cols-1 gap-4">
					{/* Default Reader is full Page Component */}
					<Reader />
				</div>
			</div>
		</ReaderProvider>
	);
};

export default FullPage;
