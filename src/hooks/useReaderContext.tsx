// useReaderContext.tsx
import { useContext } from "react";
import { ReaderContext } from "src/contexts/ReaderContext";
import { IReaderState } from "./useReaderState";
import { IContentState } from "./useReaderState/useContentState";
import { IAnnotationState } from "./useAnnotationState";
import { IBookmarkState } from "./useBookmarkState";
import { ISearchState } from "./useSearchState";
import { ISidebarState } from "./useSidebarState";

export const useReader = (): IReaderState => {
	const context = useContext(ReaderContext);
	if (!context) {
		throw new Error("useReader should be called inside ReaderContext");
	}
	return context.readerState;
};

export const useContent = (): IContentState => {
	const context = useContext(ReaderContext);
	if (!context) {
		throw new Error("useContent should be called inside ReaderContext");
	}
	return context.contentState;
};

export const useAnnotation = (): IAnnotationState => {
	const context = useContext(ReaderContext);
	if (!context) {
		throw new Error("useAnnotation should be called inside ReaderContext");
	}
	return context.annotationState;
};

export const useBookmark = (): IBookmarkState => {
	const context = useContext(ReaderContext);
	if (!context) {
		throw new Error("useBookmark should be called inside ReaderContext");
	}
	return context.bookmarkState;
};

export const useSearch = (): ISearchState => {
	const context = useContext(ReaderContext);
	if (!context) {
		throw new Error("useSearch should be called inside ReaderContext");
	}
	return context.searchState;
};

export const useSidebar = (): ISidebarState => {
	const context = useContext(ReaderContext);
	if (!context) {
		throw new Error("useSidebar should be called inside ReaderContext");
	}
	return context.sidebarState;
};
