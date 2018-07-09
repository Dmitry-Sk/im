export const sidebarMenuItems = {
  rootLevel: [
    {
      divider: true,
      label: 'Home'
    },
    {
      label: 'Dashboard',
      icon: 'icon mdi mdi-apps',
      link: 'quick-overview'
    },
    {
      label: 'My Items',
      icon: 'icon mdi mdi-folder-person',
      link: '/dashboard/my-projects',
      children: [
        {
          label: 'Projects',
          icon: 'icon mdi mdi-folder',
          link: 'my-projects'
        },
        {
          label: 'Requirements',
          icon: 'icon mdi mdi-folder',
          link: 'my-requirements'
        },
        {
          label: 'Solutions',
          icon: 'icon mdi mdi-folder',
          link: 'my-solutions'
        },
        {
          label: 'Test Scenarios',
          icon: 'icon mdi mdi-folder',
          link: 'my-test-scenarios'
        },
        {
          label: 'Issues',
          icon: 'icon mdi mdi-folder',
          link: 'my-issues'
        },
        {
          label: 'Activities',
          icon: 'icon mdi mdi-folder',
          link: 'my-activities'
        },
        {
          label: 'Reviews',
          icon: 'icon mdi mdi-folder',
          link: 'my-reviews'
        }
      ]
    },
    {
      label: 'Reporting',
      icon: 'icon mdi mdi-chart',
      link: '/reporting'
    },
    {
      label: 'Archives',
      icon: 'icon mdi mdi-archive',
      link: '/archives',
      children: [
        {
          label: 'Projects',
          icon: 'icon mdi mdi-folder',
          link: 'projects'
        },
        {
          label: 'Requirements',
          icon: 'icon mdi mdi-folder',
          link: 'requirements'
        },
        {
          label: 'Solutions',
          icon: 'icon mdi mdi-folder',
          link: 'solutions'
        },
        {
          label: 'Test Scenarios',
          icon: 'icon mdi mdi-folder',
          link: 'test-scenarios'
        },
        {
          label: 'Issues',
          icon: 'icon mdi mdi-folder',
          link: 'issues'
        }
      ]
    },
    {
      label: 'Admin',
      icon: 'icon mdi mdi-settings-square',
      link: '/admin',
      children: [
        {
          label: 'Groups',
          icon: 'icon mdi mdi-folder',
          link: 'groups'
        },
        {
          label: 'Sources',
          icon: 'icon mdi mdi-folder',
          link: 'sources'
        },
        {
          label: 'Design Types',
          icon: 'icon mdi mdi-folder',
          link: 'design-types'
        },
        {
          label: 'User Types',
          icon: 'icon mdi mdi-folder',
          link: 'user-types'
        },
        {
          label: 'Catalog',
          icon: 'icon mdi mdi-folder',
          link: 'catalog'
        },
        {
          label: 'User Defined Fields',
          icon: 'icon mdi mdi-folder',
          link: 'user-defined-fields'
        },
        {
          label: 'Workplan Settings',
          icon: 'icon mdi mdi-settings',
          link: 'workplan-settings'
        }
      ]
    },
    {
      label: 'Security',
      icon: 'icon mdi mdi-shield-security',
      link: '/security',
      children: [
        {
          label: 'Tenants',
          icon: 'icon mdi mdi-accounts-list',
          link: 'tenants'
        },
        {
          label: 'Users',
          icon: 'icon mdi mdi-accounts',
          link: 'users'
        },
        {
          label: 'Roles',
          icon: 'icon mdi mdi-assignment-account',
          link: 'roles'
        },
        {
          label: 'System Settings',
          icon: 'icon mdi mdi-settings',
          link: 'settings'
        },
        {
          label: 'User Profile',
          icon: 'icon mdi mdi-face',
          link: 'user-profile'
        }
      ]
    },
    {
      label: 'Library',
      icon: 'icon mdi mdi-library',
      link: '/library'
    }
  ],
  projectLevel: [
    {
      divider: true,
      label: 'Navigation'
    },
    {
      label: 'Back to Home',
      icon: 'icon mdi mdi-home',
      link: '/dashboard'
    },
    {
      label: 'Other Projects',
      icon: 'icon mdi mdi-folder',
      link: '/dashboard/my-projects'
    },
    {
      divider: true,
      label: 'General'
    },
    {
      label: 'Project Overview',
      icon: 'icon mdi mdi-apps',
      link: ['overview']
    },
    {
      label: 'Project Info',
      icon: 'icon mdi mdi-info',
      link: 'snapshot/project-info'
    },
    {
      label: 'Status History',
      icon: 'icon mdi mdi-view-list-alt',
      link: 'snapshot/status-history'
    },
    {
      divider: true,
      label: 'Project Items'
    },
    {
      label: 'Requirements',
      icon: 'icon mdi mdi-folder',
      link: ['requirements']
    },
    {
      label: 'Solutions',
      icon: 'icon mdi mdi-folder',
      link: ['solutions']
    },
    {
      label: 'Test Scenarios',
      icon: 'icon mdi mdi-folder',
      link: ['test-scenarios']
    },
    {
      label: 'Issues',
      icon: 'icon mdi mdi-folder',
      link: ['issues']
    },
    {
      label: 'Attachments',
      icon: 'icon mdi mdi-attachment-alt',
      link: ['attachments']
    },
    {
      divider: true,
      label: 'Project Tools'
    },
    {
      label: 'Workplan',
      icon: 'icon mdi mdi-calendar-check',
      link: ['workplan']
    },
    {
      label: 'Traceability',
      icon: 'icon mdi mdi-link',
      link: ['traceability']
    },
    {
      label: 'Team',
      icon: 'icon mdi mdi-accounts',
      link: ['team']
    },
    {
      label: 'Budget',
      icon: 'icon mdi mdi-format-list-numbered',
      link: ['budget']
    }
  ],
  requirementLevel: [
    {
      divider: true,
      label: 'Navigation'
    },
    {
      label: 'Back to Home',
      icon: 'icon mdi mdi-home',
      link: '/dashboard'
    },
    {
      label: 'Parent Project',
      icon: 'icon mdi mdi-long-arrow-left',
      link: '/dashboard/my-projects'
    },
    {
      divider: true,
      label: 'General'
    },
    {
      label: 'Requirement Info',
      icon: 'icon mdi mdi-info',
      link: ['info']
    },
    {
      divider: true,
      label: 'Requirement Items'
    },
    {
      label: 'User Stories',
      icon: 'icon mdi mdi-folder',
      link: ['user-stories']
    },
    {
      label: 'Issues',
      icon: 'icon mdi mdi-folder',
      link: ['issues']
    },
    {
      label: 'Attachments',
      icon: 'icon mdi mdi-attachment-alt',
      link: ['attachments']
    }
  ]
};
