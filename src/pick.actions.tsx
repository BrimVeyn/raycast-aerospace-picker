import { ActionPanel, Action, closeMainWindow } from "@raycast/api";
import { Icon, Color } from "@raycast/api";
import { allWorkspaceIds } from "./workspaces";

import { 
	PickEmptyWorkspacesActionProps,
	PickAnyWorkspaceActionProps,
	MoveWindowActionProps, 
    MoveWindowToCurrentActionProps
} from "./pick.actions.types";

import { 
	runMoveWindowToWorkspace,
	runFocusWindow,
	runGetCurrentWorkspace 
} from "./run";


export function PickEmptyWorkspaceAction(
	{item, emptyWorkspaces, revalidateWorkspaces}: PickEmptyWorkspacesActionProps
) {
	return (
		<ActionPanel.Submenu 
			shortcut={{ modifiers: ["cmd"], key: "m" }}
			title="Move to Empty Workspace"
		>
			{emptyWorkspaces.map((workspaceId) => (
				<Action
					key={workspaceId}
					icon={{ source: Icon.ArrowRight, tintColor: Color.Green }}
					title={workspaceId}
					onAction={async () => {
						runMoveWindowToWorkspace(item["window-id"], workspaceId)
						await closeMainWindow();
						revalidateWorkspaces();
					}}
				/>
			))}
		</ActionPanel.Submenu>
	);
}

export function PickAnyWorkspaceAction(
	{item, revalidateWorkspaces}: PickAnyWorkspaceActionProps
) {
	return (
		<ActionPanel.Submenu 
			shortcut={{ modifiers: ["cmd"], key: "a" }}
			title="Move to Any Workspace"
		>
			{allWorkspaceIds.map((workspaceId) => (
				<Action
					key={workspaceId}
					icon={{ source: Icon.ArrowRight, tintColor: Color.Green }}
					title={workspaceId}
					onAction={async () => {
						runMoveWindowToWorkspace(item["window-id"], workspaceId)
						await closeMainWindow();
						revalidateWorkspaces();
					}}
				/>
			))}
		</ActionPanel.Submenu>
	);
}

export function MoveWindowAction({item}: MoveWindowActionProps) {
	return (
		<Action
			title={"Focus on Window"}
			onAction={async () => {
				runFocusWindow(item["window-id"]);
				await closeMainWindow();
			}}
		/>
	)
}

export function MoveWindowToCurrentAction({item, revalidateWorkspaces}: MoveWindowToCurrentActionProps) {
	return (
		<Action
			title={"Move to Current Workspace"}
			onAction={async () => {
				const currentWorkspace = runGetCurrentWorkspace();
				if (!currentWorkspace.success) {
					console.error('Failed to get current workspace:', currentWorkspace.error);
					return;
				}
				runMoveWindowToWorkspace(item["window-id"], currentWorkspace.output.trim());
				await closeMainWindow();
				revalidateWorkspaces();
			}}
		/>
	)
}
