import React, { useEffect } from "react";
import { ReaderStyle as defaultStyles, type IReaderStyle } from "./style";
import { Sidebar } from "../Sidebar";
import { Drawer } from "../Drawer";

import ContentView from "./ContentView";
import BookmarkToggle from "../components/BookmarkToggle";
import FullScreenToggle from "../components/FullScreenToggle";
import ThemeToggle from "../components/ThemeToggle";
import ScrollToggle from "../components/ScrollToggle";

import { useReader, useSidebar } from "src/hooks/useReaderContext";

import { GoLinkExternal } from "react-icons/go";

export type IReaderProps = {
	title?: string;
	showSidebar?: boolean;
	readerStyles?: IReaderStyle;

	bookUrl: string;
	initialFontSize?: string;
	epubOptions?: Object;

	modal: Boolean;
};

export const Reader = (props: IReaderProps) => {
	const { url, setUrl, book, bookLocation } = useReader();

	const { sidebar } = useSidebar();

	useEffect(() => {
		if (url) return;

		setUrl(props.bookUrl);

		return () => {
			try {
				if (book) {
					book.destroy();
					console.log("Book was destroyed");
				} else {
					console.log("No Book to destroy");
				}
			} catch {
				console.error("Error Destroying book");
			}
		};
	}, []);

	const {
		title = "title",
		readerStyles = defaultStyles,
		modal = false,
	} = props;
	return (
		<div className="md:aspect-video aspect-[3/4] w-full h-full flex gap-1 flex-col overflow-hidden">
			{!modal && (
				<div className="h-12 border border-stone-300 rounded flex justify-between items-center p-3 ">
					<div className="flex-grow">
						<h3 className="font-semibold text-lg capitalize">
							{title}
						</h3>
					</div>
					<div className="flex justify-between items-center gap-2">
						<BookmarkToggle />
						<FullScreenToggle />
						<ThemeToggle />
						<ScrollToggle />
						{/* full screen */}
						{/* theme */}
						{/* reading direction */}
					</div>
				</div>
			)}
			<div className="flex w-full h-full gap-1">
				{!modal && <Sidebar />}

				<div className="flex-grow border border-stone-300 rounded">
					<div style={readerStyles.container}>
						<div style={readerStyles.readerArea} ref={bookLocation}>
							{modal && (
								<GoLinkExternal
									size={25}
									onClick={() => alert("okay")}
									className="absolute right-5 top-5 cursor-pointer text-gray-500 hover:text-gray-700"
								/>
							)}
							<ContentView />
						</div>
						{!modal && sidebar && <Drawer />}
					</div>
				</div>
			</div>
		</div>
	);
};
