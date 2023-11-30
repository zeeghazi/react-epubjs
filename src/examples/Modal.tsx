import React from "react";
import { Reader } from "src/Reader";
import { ReaderProvider } from "src/providers/ReaderProvider";

const Modal = () => {
	return (
		<ReaderProvider>
			<div className="relative h-full w-full min-h-screen bg-stone-100 p-4">
				<div className="max-w-6xl mx-auto grid grid-cols-1 gap-4">
					{/* Modal View of Reader */}
					<Reader
						showSidebar={false}
						showToolbar={false}
						externalLink="Some external link"
					/>
				</div>
			</div>
		</ReaderProvider>
	);
};

export default Modal;
