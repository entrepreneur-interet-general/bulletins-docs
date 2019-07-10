sidebar = [
  ['/', 'Home'],
  'installation',
  'configuration',
  'deployment',
  'contributing',
  'security',
  'license-doc',
  'credits'
]

module.exports = {
  theme: 'gouv-fr',
  title: 'Bulletins',
  description: 'Bulletins is a weekly retrospective tool for multiple projects or teams. It lets people reflect on their past week.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0053b3' }]
  ],
  themeConfig: {
    sidebar: sidebar,
    sidebarDepth: 1,
    repo: 'entrepreneur-interet-general/bulletins',
    repoLabel: 'Project source code',
    docsRepo: 'entrepreneur-interet-general/bulletins-docs',
    editLinks: true,
    editLinkText: 'Improve this page'
  }
}
