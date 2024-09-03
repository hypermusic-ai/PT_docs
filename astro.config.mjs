import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Performative Transactions - Docs',
			social: {
				github: 'https://github.com/sunsetsobserver/PT_docs',
			},
			sidebar: [
				{
					label: 'Welcome',
					items: [
						{ label: 'Welcome', slug: 'introduction/welcome' },
						{ label: 'Installation', slug: 'introduction/installation' },
						{ label: 'Quick Start', slug: 'introduction/quick_start_example' },
					],
				},
				{
					label: 'Performative Transactions',
					items: [
						{ label: 'Performative Transactions', slug: 'performative_transactions/performative_transactions' },
					],
				},
				{
					label: 'Tutorial',
					items: [
						{ label: 'Tutorial', slug: 'tutorial/tutorial' },
					],
				},
				{
					label: 'API',
					items: [
						{ label: 'API', slug: 'api/api' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'Examples', slug: 'examples/examples' },
					],
				},
				{
					label: 'Further reading',
					items: [
						{ label: 'Further reading', slug: 'further_reading/further_reading' },
					],
				}
			],
		}),
	],
});
