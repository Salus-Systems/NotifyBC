import {
  ApplicationConfig,
  CoreBindings,
  Getter,
  inject,
  intercept,
} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {HttpErrors, MiddlewareContext, RestBindings} from '@loopback/rest';
import {DbDataSource} from '../datasources';
import {SubscriptionAccessInterceptor} from '../interceptors';
import {Subscription} from '../models';
import {BaseCrudRepository} from './baseCrudRepository';
const jmespath = require('jmespath');

@intercept(SubscriptionAccessInterceptor.BINDING_KEY)
export class SubscriptionRepository extends BaseCrudRepository<
  Subscription,
  typeof Subscription.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @inject.getter(RestBindings.Http.CONTEXT)
    protected getHttpContext: Getter<MiddlewareContext>,
    @inject(CoreBindings.APPLICATION_CONFIG)
    protected appConfig: ApplicationConfig,
  ) {
    super(Subscription, dataSource, getHttpContext, appConfig);
  }

  definePersistedModel(
    entityClass: typeof Subscription,
  ): typeof juggler.PersistedModel {
    const modelClass = super.definePersistedModel(entityClass);
    modelClass.observe('before save', async ctx => {
      const data = ctx.instance || ctx.data;
      if (!data) {
        return;
      }
      let filter = data.broadcastPushNotificationFilter;
      if (!filter) {
        return;
      }
      if (typeof filter !== 'string') {
        throw new HttpErrors[400]('invalid broadcastPushNotificationFilter');
      }
      filter = '[?' + filter + ']';
      try {
        jmespath.compile(filter);
      } catch (ex) {
        throw new HttpErrors[400]('invalid broadcastPushNotificationFilter');
      }
      return;
    });
    return modelClass;
  }
}
