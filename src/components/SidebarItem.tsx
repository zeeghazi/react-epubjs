import React from "react";

type SidebarItemProps = {
	icon: any;
	active: Boolean;
};

export const SidebarItem = ({ icon, active }: SidebarItemProps) => {
	return (
		<li
			className={`
				relative flex items-center p-2 my-1
				font-medium rounded-md cursor-pointer
				transition-colors group
				${
					active
						? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
						: "hover:bg-indigo-50 text-gray-600"
				}
			`}
		>
			{icon}
		</li>
	);
};
