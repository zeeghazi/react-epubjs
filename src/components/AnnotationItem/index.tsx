import React from "react";

import {
	AnnotationItemStyle as defaultAnnotationItemStyles,
	type IAnnotationItemStyle,
} from "./style";
import type { AnnotationItemObject } from "../../hooks/useAnnotationState";
import {
	useAnnotation,
	useReader,
	useSidebar,
} from "src/hooks/useReaderContext";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiTrashLight } from "react-icons/pi";

type IAnnotationItemProps = {
	annotationItem: AnnotationItemObject;
	annotationItemStyles?: IAnnotationItemStyle;
};

export const AnnotationItem: React.FC<IAnnotationItemProps> = ({
	annotationItem,
	annotationItemStyles = defaultAnnotationItemStyles,
}: IAnnotationItemProps) => {
	const { rendition } = useReader();
	const { removeAnnotation } = useAnnotation();
	const { setSidebar } = useSidebar();

	const handleAnnotationItemClick = (i: AnnotationItemObject) => {
		rendition.current && rendition.current.display(i.cfiRange);
		setSidebar(null);
	};

	const handleRemoveAnnotationItemClick = (i: AnnotationItemObject) => {
		rendition.current &&
			rendition.current.annotations.remove(i.cfiRange, "highlight");
		removeAnnotation(i.cfiRange);
	};

	return (
		<div className="relative py-3 flex  justify-between items-start">
			<div className="">
				<button
					onClick={() => handleAnnotationItemClick(annotationItem)}
					style={annotationItemStyles.itemButton}
					className="text-gray-500 hover:text-gray-700 px-0"
				>
					{annotationItem.text}
				</button>
				<p className="text-indigo-500">
					Added On: {annotationItem.time}
				</p>
			</div>
			<div className="self-start ">
				<PiTrashLight
					size={30}
					onClick={() =>
						handleRemoveAnnotationItemClick(annotationItem)
					}
					className=" cursor-pointer text-red-500 hover:text-red-400"
				/>
			</div>
		</div>
	);
};
