/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { useState } from 'react';
import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPopover,
  EuiSpacer,
  EuiText,
  EuiCode,
} from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n/react';
import { LocationLink } from '../monitor_list/monitor_list_drawer';

export const LocationMissingWarning = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const button = (
    <EuiButton iconType="alert" size="s" color="warning" onClick={togglePopover}>
      Geo Information Missing
    </EuiButton>
  );

  return (
    <EuiFlexGroup gutterSize="none">
      <EuiFlexItem grow={false} style={{ marginLeft: 'auto', marginRight: 20 }}>
        <EuiPopover
          id="popover"
          button={button}
          isOpen={isPopoverOpen}
          closePopover={togglePopover}
        >
          <EuiText style={{ width: '350px' }}>
            <FormattedMessage
              id="xpack.uptime.locationMap.locations.missing.message"
              defaultMessage="Important geo location configuration is missing.
              You can use the {codeBlock} field to create distinctive geographic regions for
               your uptime checks."
              values={{ codeBlock: <EuiCode>observer.geo.??</EuiCode> }}
            />
          </EuiText>
          <EuiSpacer size="xs" />
          <EuiText style={{ width: '350px' }}>
            <FormattedMessage
              id="xpack.uptime.locationMap.locations.missing.message1"
              defaultMessage="Get more information in our documentation."
            />
            <EuiSpacer size="xs" />
            <LocationLink />
          </EuiText>
        </EuiPopover>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
