import '@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css';

import { defineCustomElements as defineUtrechtComponents } from '@utrecht/web-component-library-stencil';

defineUtrechtComponents();

const statuses = {
  BETA: '#9F5E0F',
  STABLE: '#339900',
  DEPRECATED: '#f02c2c',
  'IN DEVELOPMENT': '#174050',
};

const previewTabs = {
  'storybookjs/notes/panel': { title: 'Documentation' },
  'storybook/docs/panel': { title: 'API' },
  canvas: { title: 'Design Tokens' },
};

export const parameters = {
  controls: { expanded: false },
  previewTabs,
  statuses,
  options: {
    panelPosition: 'right',
  },
};