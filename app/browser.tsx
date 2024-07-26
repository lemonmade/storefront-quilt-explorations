import '~/global/ui/styles.ts';

const url = new URL(window.location.href);
const firstPart = url.pathname.split('/')[1];

switch (firstPart) {
  case 'graphql': {
    const {hydrateGraphQL} = await import('./browser/graphql.tsx');
    hydrateGraphQL();
    break;
  }
  case 'multi-page-app': {
    const {hydrateMultiPageApp} = await import('./browser/multi-page-app.ts');
    hydrateMultiPageApp();
    break;
  }
  default: {
    console.error(`No browser entry for path: ${firstPart}`);
    break;
  }
}

export {};
