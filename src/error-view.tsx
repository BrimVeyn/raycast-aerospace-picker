import { ActionPanel, Action, List, openExtensionPreferences, Icon } from "@raycast/api";

export function ErrorView() {
	return (
		<List>
			<List.EmptyView 
				title="Error" 
				actions={
					<ActionPanel>
						<Action
							title="Open Preferences"
							icon={{ source: Icon.Gear }}
							onAction={() => openExtensionPreferences()}
						/>
					</ActionPanel>
				}
				description="Failed to get windows. Make sure aerospace is installed and running. Default path is /usr/bin/local/aerospace" />
			
			
		</List>
	);
	
}
