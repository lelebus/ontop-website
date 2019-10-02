module.exports = {
	base: '/',
	title: 'Ontop',
	themeConfig: {
		repo: 'ontop/ontop',
		docsRepo: 'ontop/ontop-website',
		editLinks: true,
		lastUpdated: 'Last Updated',
		nav: [
			{
			  text: 'Guide',
			  link: '/guide/',
			},
			{
				text: 'Dev',
				link: '/dev/'
			},
			{
				text: 'Research',
				link: '/research/'
			},
			{
				text: 'Community',
				link: '/community/'
			},
			{
				text: 'Jobs',
				link: '/jobs/'
			},
		],
		sidebar: {
			'/guide/': genGuideSidebarConfig('Guide'),
			'/dev/': genDevSidebarConfig('Development'),
			'/research/': genResearchSidebarConfig('Research'),
		}
	},
	plugins: [
		['mathjax', {
		  target: 'svg',
		  macros: {
			'*': '\\times',
		  },
		}],
	  ]
}

function genGuideSidebarConfig (title) {
	return [
	  {
		title,
		collapsable: true,
		children: [
		  '',
		  'getting-started',
		  'concepts',
		  'materialization',
		  'glossary'
		]
	  }
	]
  }

function genDevSidebarConfig (title) {
	return [
	  {
		title,
		collapsable: false,
		children: [
		  '',
		  'iq',
		]
	  }
	]
  }

function genResearchSidebarConfig (title) {
	return [
	  {
		title,
		collapsable: false,
		children: [
		  '',
		  'publications',
		  'notation',
		  'iq-formal',
		  'optimization',
		]
	  }
	]
  }
