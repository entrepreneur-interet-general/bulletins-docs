sidebar = [
  ['/', 'Home'],
  'installation',
  'configuration',
  'contributing',
  'security',
]

module.exports = {
  title: 'Bulletins',
  description: 'Jeu de données des affaires maritimes sur l\'assistance et le sauvetage en mer',
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
