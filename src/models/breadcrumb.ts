export interface Breadcrumb {
  label: string;
  translation?: string;
  link?: string;
}

export const BC_HOME: Breadcrumb = {
  label: 'home',
  translation: 'pages.home',
  link: '/home',
};

export const BC_GROUPS: Breadcrumb = {
  label: 'groups',
  translation: 'pages.groups',
  link: '/groups',
};

export const BC_PARTICIPATION: Breadcrumb = {
  label: 'participation',
  translation: 'pages.participation',
};
