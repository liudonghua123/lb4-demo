import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './db.datasource.json';

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'db';

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

export interface Options {
  [property: string]: any;
}

export interface SchemaMigrationOptions extends Options {
  /**
   * When set to 'drop', schema migration will drop existing tables and recreate
   * them from scratch, removing any existing data along the way.
   *
   * When set to 'alter', schema migration will try to preserve current schema
   * and data, and perform a non-destructive incremental update.
   */
  existingSchema?: 'drop' | 'alter';

  /**
   * List of model names to migrate.
   *
   * By default, all models are migrated.
   */
  models?: string[];
}
