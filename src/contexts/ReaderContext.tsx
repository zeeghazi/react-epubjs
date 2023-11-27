import { createContext } from "react";
import { IAnnotationState } from "src/hooks/useAnnotationState";
import { IBookmarkState } from "src/hooks/useBookmarkState";
import { IReaderState } from "src/hooks/useReaderState";
import { IContentState } from "src/hooks/useReaderState/useContentState";
import { ISearchState } from "src/hooks/useSearchState";
import { ISidebarState } from "src/hooks/useSidebarState";

// Define the shape of the context data
export interface ReaderContextData {
	readerState: IReaderState;
	contentState: IContentState;

	annotationState: IAnnotationState;
	bookmarkState: IBookmarkState;
	searchState: ISearchState;
	sidebarState: ISidebarState;
}

// Create the context
export const ReaderContext = createContext<ReaderContextData | undefined>(
	undefined
);
