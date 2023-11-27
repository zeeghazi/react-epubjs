import React from "react";
import {
	IAnnotationsStyle as defaultAnnotationsStyles,
	type IAnnotationsStyle,
} from "./style";
import { AnnotationItem } from "../../components/AnnotationItem";
import { useAnnotation } from "src/hooks/useReaderContext";

interface IAnnotationsProps {
	annotationsStyle?: IAnnotationsStyle;
}

export const Annotations: React.FC<IAnnotationsProps> = ({
	annotationsStyle = defaultAnnotationsStyles,
}) => {
	const { annotations } = useAnnotation();

	return (
		<div className="h-full overflow-hidden flex flex-col">
			<p className="font-semibold text-lg text-center py-2">
				Annotations
			</p>
			<div className="p-4 flex-grow overflow-auto">
				{annotations?.map((item, i) => (
					<AnnotationItem key={i} annotationItem={item} />
				))}
				{annotations.length === 0 && <div>No Annotation found</div>}
			</div>
		</div>
	);
};