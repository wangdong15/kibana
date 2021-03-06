/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import 'hapi';

import { XPackMainPlugin } from '../legacy/plugins/xpack_main/server/xpack_main';
import { SecurityPlugin } from '../legacy/plugins/security';
import { ActionsPlugin, ActionsClient } from '../legacy/plugins/actions';
import { AlertingPlugin, AlertsClient } from '../legacy/plugins/alerting';
import { LegacyTaskManagerApi } from '../legacy/plugins/task_manager/server';

declare module 'hapi' {
  interface Request {
    getActionsClient?: () => ActionsClient;
    getAlertsClient?: () => AlertsClient;
  }
  interface PluginProperties {
    xpack_main: XPackMainPlugin;
    security?: SecurityPlugin;
    actions?: ActionsPlugin;
    alerting?: AlertingPlugin;
    task_manager?: LegacyTaskManagerApi;
  }
}
