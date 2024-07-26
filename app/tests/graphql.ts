import {
  GraphQLTesting,
  GraphQLController,
  createGraphQLSchema,
  createGraphQLFiller,
} from '@quilted/quilt/graphql/testing';
import type {GraphQLSchema} from 'graphql';

import schemaSource from '../graphql/storefront.schema.ts';

export const schema: GraphQLSchema = createGraphQLSchema(schemaSource);
export const fillGraphQL = createGraphQLFiller(schema);

export {GraphQLController, GraphQLTesting};
