module.exports = {
  title: 'Docs Aviônica',
  tagline: 'Documentação 2021',
  url: 'https://gabrielaleks.github.io',
  baseUrl: '/avionicsdocumentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/rocketslogo.png',
  organizationName: 'gabrielaleks', // Usually your GitHub org/user name.
  projectName: 'avionicsdocumentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Documentação da Aviônica',
      logo: {
        alt: 'My Site Logo',
        src: 'img/rocketslogo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        }
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Reuniões',
              to: 'docs/',
            },
            {
              label: 'Software',
              to: 'docs/aurorav2/software/testes',
            },
            {
              label: 'Hardware',
              to: 'docs/aurorav2/hardware/placas/eps',
            },
          ],
        },
        {
          title: 'Equipe',
          items: [
            {
              label: 'Drive Aurora v2',
              href: 'https://drive.google.com/drive/folders/1wKmspL46cDf3ZiCs6gtNX4kgUeMaifdQ',
            },
            {
              label: 'Drive Quimera',
              href: 'https://drive.google.com/drive/folders/1PdMzJ-8ejoUx9HsQBAT91qSjCtS1ZxnX',
            },
            {
              label: 'Github',
              href: 'https://github.com/orgs/minervarockets/teams',
            },
            {
              label: 'Slack',
              href: 'https://minervarockets.slack.com/',
            },
            {
              label: 'Clickup',
              href: 'https://app.clickup.com/3004498/v/f/3168746/3007293?pr=3007293',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Site',
              href: 'https://www.minervarockets.poli.ufrj.br/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/minervarockets/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/minerva-rockets/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Minerva Rockets`,
    },
    image: 'img/rocketslogo.png',
    hideableSidebar: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/gabrielaleks/avionicsdocumentation/edit/master/my-website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
