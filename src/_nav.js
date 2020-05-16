export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cil-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      }
    },
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: 'div',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'cil-drop',
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'cil-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'cil-puzzle',
      children: [
        {
          name: 'Breadcrumb',
          url: '/base/breadcrumbs',
        },
        {
          name: 'Cards',
          url: '/base/cards',
        },
        {
          name: 'Carousel',
          url: '/base/carousels',
        },
        {
          name: 'Collapse',
          url: '/base/collapses',
        },
        /*
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
        },*/
        {
          name: 'Jumbotron',
          url: '/base/jumbotrons',
        },
        {
          name: 'List group',
          url: '/base/list-groups',
        },
        {
          name: 'Navs',
          url: '/base/navs',
        },
        {
          name: 'Navbars',
          url: '/base/navbars',
        },
        {
          name: 'Pagination',
          url: '/base/paginations',
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
        },
        {
          name: 'Progress',
          url: '/base/progress-bar',
        },
        {
          name: 'Switches',
          url: '/base/switches',
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
        },
      ],
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'cil-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
        },
        {
          name: 'Brand buttons',
          url: '/buttons/brand-buttons',
        },
        {
          name: 'Buttons groups',
          url: '/buttons/button-groups',
        },
        {
          name: 'Dropdowns',
          url: '/buttons/button-dropdowns',
        }
      ],
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'cil-chart-pie'
    },
    {
      name: 'Editors',
      url: '/editors',
      icon: 'cil-code',
      children: [
        {
          name: 'Code Editors',
          url: '/editors/code-editors',
          badge: {
            variant: 'danger',
            text: 'PRO',
          },
        },
        {
          name: 'Rich Text Editor',
          url: '/editors/text-editors',
          badge: {
            variant: 'danger',
            text: 'PRO',
          },
        }
      ]
    },
    {
      name: 'Forms',
      url: '/forms',
      icon: 'cil-notes',
      children: [
        {
          name: 'Basic Forms',
          url: '/forms/basic-forms',
        },
        {
          name: 'Advanced Forms',
          url: '/forms/advanced-forms',
          badge: {
            variant: 'danger',
            text: 'PRO'
          }
        },
        {
          name: 'Validation',
          url: '/forms/validation-forms',
          badge: {
            variant: 'danger',
            text: 'PRO'
          }
        }
      ]
    },
    {
      name: 'Google Maps',
      url: '/google-maps',
      icon: 'cil-map',
      badge: {
        variant: 'danger',
        text: 'PRO'
      }
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'cil-star',
      children: [
        {
          name: 'CoreUI Free',
          url: '/icons/coreui-icons',
          badge: {
            variant: 'success',
            text: 'NEW',
          },
        },
        {
          name: 'CoreUI Flags',
          url: '/icons/flags',
        },
        {
          name: 'CoreUI Brands',
          url: '/icons/brands',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'cil-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
        },
        {
          name: 'Modal',
          url: '/notifications/modals',
        },
        {
          name: 'Toaster',
          url: '/notifications/toastr',
          badge: {
            variant: 'danger',
            text: 'PRO'
          }
        }
      ]
    },
    {
      name: 'Plugins',
      url: '/plugins',
      icon: 'cil-bolt',
      children: [
        {
          name: 'Calendar',
          url: '/plugins/calendar',
          badge: {
            variant: 'danger',
            text: 'PRO'
          }
        },
        {
          name: 'Draggable',
          url: '/plugins/draggable',
          badge: {
            variant: 'danger',
            text: 'PRO'
          }
        },
        {
          name: 'Spinners',
          url: '/plugins/spinners',
          badge: {
            variant: 'danger',
            text: 'PRO'
          }
        }
      ]
        },
    {
      name: 'Tables',
      url: '/tables',
      icon: 'cil-columns',
      children: [
        {
          name: 'Standard Tables',
          url: '/tables/tables',
        },
        {
          name: 'DataTables',
          url: '/tables/data-table',
          badge: {
            variant: 'danger',
            text: 'PRO'
          }
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'cil-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'cil-star',
      children: [
        {
          name: 'Login',
          url: '/login',
        },
        {
          name: 'Register',
          url: '/register',
        },
        {
          name: 'Error 404',
          url: '/404',
        },
        {
          name: 'Error 500',
          url: '/500',
        },
      ],
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'cil-ban',
      badge: {
        variant: 'secondary',
        text: 'NEW',
      },
      attributes: { disabled: true },
    },
    {
      name: 'Apps',
      url: '/apps',
      icon: 'cil-layers',
      children: [
        {
          name: 'Invoicing',
          url: '/apps/invoicing',
          icon: 'cil-spreadsheet',
          children: [
            {
              name: 'Invoice',
              url: '/apps/invoicing/invoice',
              badge: {
                variant: 'danger',
                text: 'PRO'
              }
            }
          ]
        },
        {
          name: 'Email',
          url: '/apps/email',
          icon: 'cil-envelope-open',
          children: [
            {
              name: 'Inbox',
              url: '/apps/email/inbox',
              badge: {
                variant: 'danger',
                text: 'PRO',
              },
            },
            {
              name: 'Message',
              url: '/apps/email/message',
              badge: {
                variant: 'danger',
                text: 'PRO',
              },
            },
            {
              name: 'Compose',
              url: '/apps/email/compose',
              badge: {
                variant: 'danger',
                text: 'PRO',
              },
            },
          ],
        },
      ]
    },
    {
      divider: true,
      class: 'm-2'
    },
    {
      title: true,
      name: 'Labels'
    },
    {
      name: 'Label danger',
      url: '',
      icon: 'cil-bookmark',
      label: {
        variant: 'danger'
      },
    },
    {
      name: 'Label info',
      url: '',
      icon: 'cil-bookmark',
      label: {
        variant: 'info'
      }
    },
    {
      name: 'Label warning',
      url: '',
      icon: 'cil-bookmark',
      label: {
        variant: 'warning'
      }
    },
    {
      divider: true,
      class: 'm-2'
    }
  ]
};
