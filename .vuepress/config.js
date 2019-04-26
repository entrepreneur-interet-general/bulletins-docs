sidebar = [
  ['/', 'Home'],
  'installation',
  'configuration',
  'contributing',
  'security',
]

module.exports = {
  title: 'Bulletins',
  description: 'Bulletins is a weekly retrospective tool for multiple projects or teams. It lets people reflect on their past week.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0053b3' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    sidebar: sidebar,
    sidebarDepth: 1
  }
}
