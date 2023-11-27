import React from "react";
import {
	BookmarkToggleStyle as defaultBookmarkToggleStyles,
	type IBookmarkToggleStyle,
} from "./style";
import { useBookmark, useReader } from "src/hooks/useReaderContext";

import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdOutlineBookmarkAdded } from "react-icons/md";

interface BookmarkToggleProps {
	bookmarkToggleStyles?: IBookmarkToggleStyle;
}

const BookmarkToggle: React.FC<BookmarkToggleProps> = ({
	bookmarkToggleStyles = defaultBookmarkToggleStyles,
}) => {
	const { book, currentLocation } = useReader();

	const { addBookmark, removeBookmark, bookmarks } = useBookmark();

	const isBookmarkAdded = bookmarks.find((bookmark) => {
		// bookmark.location == currentLocation
		return bookmark.location.start.cfi === currentLocation?.start.cfi;
	});

	const onAddBookmark = async () => {
		if (book && currentLocation) {
			let name = "bookmark";
			const spineItem = book.spine.get(currentLocation.start.cfi);

			if (spineItem.index in book.navigation.toc) {
				const tocItem = book.navigation.toc[spineItem.index];
				name = tocItem.label;
			} else {
				name = currentLocation.start.cfi;
			}

			addBookmark({
				name,
				location: currentLocation,
			});
			console.log("Bookmark Added");
		} else {
			console.error("Bookmark not stored, Book not opened");
		}
	};

	const onRemoveBookmark = () => {
		removeBookmark(currentLocation);
		console.log("Remove bookmark success");
	};

	return (
		<>
			{isBookmarkAdded ? (
				<MdOutlineBookmarkAdded
					onClick={onRemoveBookmark}
					size={35}
					className="cursor-pointer p-1 text-indigo-800"
				/>
			) : (
				<MdOutlineBookmarkAdd
					onClick={onAddBookmark}
					size={35}
					className="cursor-pointer p-1 hover:bg-indigo-50 text-gray-600"
				/>
			)}
		</>
	);
};

export default BookmarkToggle;
