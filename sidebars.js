// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Get started',
      collapsible: true,
      collapsed: false,
      items: [
        'get-started/index',
        'get-started/what-is-datareality',
        'get-started/dashboard-overview',
        'get-started/selecting-your-product',
        'get-started/event-distribution',
        'get-started/navigation-menu',
        'guides/installation',
        'guides/quick-demo',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: true,
      collapsed: false,
      items: [
        'guides/tracking-event-trends',
        'guides/regulatory-test',
        'guides/analyzing-event-details',
        'guides/downloading-raw-data',
        'guides/preferences',
        'guides/events-recalls',
      ],
    },
    {
      type: 'category',
      label: 'Manuals',
      collapsible: true,
      collapsed: false,
      items: [
        'manuals/hazard-analysis',
        'manuals/fmea',
        'manuals/cra-audit',
        'manuals/vigilance-psur',
        'manuals/roles-permissions',
        'manuals/security-compliance',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      collapsed: false,
      items: [
        'reference/glossary',
        'reference/data-definitions',
        'reference/system-requirements',
        'reference/api',
        'reference/ui-components',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsible: true,
      collapsed: false,
      items: [
        'outline',
        'resources/release-notes',
        'resources/support',
      ],
    },
  ],
};

export default sidebars;
