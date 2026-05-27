import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/out-tsc'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: 'domain: shared',
              onlyDependOnLibsWithTags: ['domain: shared'],
            },
            {
              sourceTag: 'domain: booking',
              onlyDependOnLibsWithTags: ['domain: shared', 'domain: booking'],
            },
            {
              sourceTag: 'domain: customer',
              onlyDependOnLibsWithTags: ['domain: shared', 'domain: customer'],
            },
            {
              sourceTag: 'layer: interface',
              onlyDependOnLibsWithTags: ['layer: interface', 'layer: application', 'layer: domain'],
            },
            {
              sourceTag: 'layer: application',
              onlyDependOnLibsWithTags: ['layer: application', 'layer: domain'],
            },
            {
              sourceTag: 'layer: infrastructure',
              onlyDependOnLibsWithTags: ['layer: infrastructure', 'layer: application', 'layer: domain'],
            },
            {
              sourceTag: 'type: api',
              onlyDependOnLibsWithTags: ['layer: interface'],
            }
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
