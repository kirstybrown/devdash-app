export interface DevDashConfig {
	github_access_token: string;
	widgets: {
		id: string;
		repository_url: string;
	}[];
}

export const config: DevDashConfig = {
	github_access_token: process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN as string,
	widgets: [
		{
			id: "92df5c98-b06c-11ed-afa1-0242ac120002",
			repository_url: "https://github.com/CodelyTV/dotly",
		},
		{
			id: "dba6a044-b06c-11ed-afa1-0242ac120002",
			repository_url: "https://github.com/CodelyTV/eslint-plugin-hexagonal-architecture",
		},
		{
			id: "0acf6cde-b06d-11ed-afa1-0242ac120002",
			repository_url: "https://github.com/CodelyTV/refactoring-code-smells",
		},
	],
};
