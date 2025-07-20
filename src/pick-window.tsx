import { ActionPanel, List } from "@raycast/api";
import { Window, Workspaces } from "./types";
import { usePromise, useCachedState } from "@raycast/utils";
import { getEmptyWorkspacesId, getWorkspaces } from "./workspaces";
import { ErrorView } from "./error-view";
import fuzzy from 'fuzzy';

import { 
	PickAnyWorkspaceAction,
	PickEmptyWorkspaceAction,
	MoveWindowAction, 
    MoveWindowToCurrentAction
} from "./pick.actions";

function WindowList(
	{windows, emptyWorkspaces, revalidateWorkspaces}: {
		windows: Array<Window>,
		emptyWorkspaces: string[]
		revalidateWorkspaces: () => Promise<Workspaces | null>
}) {
	return (
		windows.map((item) => (
			<List.Item
				key={item["window-id"]}
				title={item["app-name"]}
				subtitle={item["window-title"]}
				icon={{ fileIcon: item["app-bundle-path"] }}
				actions={
					<ActionPanel>
						<MoveWindowAction 
							item={item} 
						/>
						<MoveWindowToCurrentAction
							item={item}
							revalidateWorkspaces={revalidateWorkspaces}
						/>
						<PickEmptyWorkspaceAction
							item={item}
							emptyWorkspaces={emptyWorkspaces}
							revalidateWorkspaces={revalidateWorkspaces}
						/>
						<PickAnyWorkspaceAction
							item={item}
							revalidateWorkspaces={revalidateWorkspaces}
						/>
					</ActionPanel>
				}
				accessories={[
					{ text: `${item["window-id"]}` },
				]}
			/>
		))
	);
}

export default function Command() {
	const [filter, setFilter] = useCachedState<string>("filter", "");

	const filterWindows = (w: Window, filter: string): boolean => {
		return fuzzy.filter(filter, [w["app-name"], w["window-title"]]).length > 0;
	};

	const { 
		isLoading,
		data: workspaces,
		revalidate: revalidateWorkspaces,
		error,
	} = usePromise( async () => getWorkspaces());

	if (error) { return <ErrorView />; }
	
	const emptyWorkspaces = getEmptyWorkspacesId(workspaces ?? []);
	
	return (
		<List 
			isLoading={isLoading}
			onSearchTextChange={setFilter}
		>
			{workspaces == null ? (
				<List.EmptyView title="No windows open" />
			) : (
					workspaces.map((workspace, index) => (
						<List.Section key={index} title={`Workspace: ${workspace["id"]}`}>
							<WindowList 
								revalidateWorkspaces={revalidateWorkspaces}
								emptyWorkspaces={emptyWorkspaces}
								windows={workspace["windows"].filter((w) => filterWindows(w, filter))} 
							/>
						</List.Section>
					))
				)}
		</List>
	);
}
