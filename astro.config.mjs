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
					],
				},
				{
					label: 'Performative Transactions',
					items: [
						{ label: 'Performative Transactions', slug: 'performative_transactions/performative_transactions' },
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
