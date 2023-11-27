import React, { ReactNode } from "react";
import { ReaderContext } from "src/contexts/ReaderContext";
import useAnnotationState from "src/hooks/useAnnotationState";
import useBookmarkState from "src/hooks/useBookmarkState";
import { useReaderState } from "src/hooks/useReaderState/index";
import { useContentState } from "src/hooks/useReaderState/useContentState";
import useSearch from "src/hooks/useSearchState";
import useSidebar from "src/hooks/useSidebarState";

// Define the props for the provider
interface ReaderProviderProps {
	children: ReactNode;
}

export const ReaderProvider: React.FC<ReaderProviderProps> = ({ children }) => {
	const readerState = useReaderState();
	const contentState = useContentState();

	const annotationState = useAnnotationState();
	const bookmarkState = useBookmarkState();
	const searchState = useSearch();
	const sidebarState = useSidebar();

	return (
		<ReaderContext.Provider
			value={{
				readerState,
				contentState,
				annotationState,
				bookmarkState,
				searchState,
				sidebarState,
			}}
		>
			{children}
		</ReaderContext.Provider>
	);
};
