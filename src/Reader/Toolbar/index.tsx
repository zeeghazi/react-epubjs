// src/Toolbar/index.tsx
import React from "react";

import {
	ToolbarStyle as defaultToolbarStyles,
	type IToolbarStyle,
} from "./style";
import BookmarkToggle from "src/components/BookmarkToggle";
import FullScreenToggle from "src/components/FullScreenToggle";
import ThemeToggle from "src/components/ThemeToggle";
import ScrollToggle from "src/components/ScrollToggle";

interface ToolbarProps {
	title: string;
	toolbarStyles?: IToolbarStyle;
}

export const Toolbar: React.FC<ToolbarProps> = ({
	toolbarStyles = defaultToolbarStyles,
	title = "Title",
}) => {
	return (
		<div className="h-12 border border-stone-300 rounded flex justify-between items-center p-3 ">
			<div className="flex-grow">
				<h3 className="font-semibold text-lg capitalize">{title}</h3>
			</div>
			<div className="flex justify-between items-center gap-2">
				<BookmarkToggle />
				<FullScreenToggle />
				<ThemeToggle />
				<ScrollToggle />
			</div>
		</div>
	);
};
