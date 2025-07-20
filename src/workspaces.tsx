import { Workspaces, Workspace, Window } from "./types";
import { runListWindows } from "./run";

export const allWorkspaceIds: string[] = [
	"1", "2", "3", "4", "5", "6",
	"7", "8", "9", "10", "A", "B",
	"C", "D", "E", "F", "G", "H",
	"I", "J", "K", "L", "M", "N",
	"O", "P", "Q", "R", "S", "T",
	"U", "V", "W", "X",	"Y", "Z",
];

export function getEmptyWorkspacesId(workspaces: Workspaces): string[] {
	const availableWorkspaces = [...allWorkspaceIds];
	workspaces.forEach((workspace) => {
		availableWorkspaces.splice(availableWorkspaces.indexOf(workspace.id), 1);
	});
	return availableWorkspaces;
}

export function getWindows(): Array<Window> {
	const result = runListWindows();
	
	if (!result.success) {
		throw new Error(`Failed to get windows: ${result.error}`);
	}
	
	try {
		const windows: Array<Window> = JSON.parse(result.output);
		return windows;
	} catch (error) {
		throw new Error(`Failed to parse windows JSON: ${error}`);
	}
}

export function getWorkspaces(): Workspaces | null {
	const windows = getWindows();
	
	if (windows.length === 0) {
		return null;
	}

	const workspaces = new Map<string, Workspace>();
	windows.forEach((window) => {
		const workspace = workspaces.get(window["workspace"]);
		if (workspace) {
			workspace.windows.push(window);
		} else {
			workspaces.set(window["workspace"], { windows: [window] });
		}
	});
	return [...workspaces.entries()]
		.sort((a, b) => a[0].localeCompare(b[0]))
		.map((workspace) => ({ id: workspace[0], ...workspace[1] }))
	;
}
