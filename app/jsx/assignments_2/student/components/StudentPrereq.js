/*
 * Copyright (C) 2018 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import I18n from 'i18n!assignments_2_prereqs'

import React from 'react'
import Heading from '@instructure/ui-elements/lib/components/Heading'
import Text from '@instructure/ui-elements/lib/components/Text'
import Button from '@instructure/ui-buttons/lib/components/Button'
import Flex, {FlexItem} from '@instructure/ui-layout/lib/components/Flex'

import {string} from 'prop-types'

function StudentPrereq(props) {
  return (
    <Flex margin="small" direction="column" alignItems="center" justifyContent="center">
      <FlexItem>
        <Heading size="large" data-test-id="assignments-2-pre-req-title" margin="small">
          {I18n.t('Prerequisite Completion Period')}
        </Heading>
      </FlexItem>
      <FlexItem>
        <Text size="medium">{props.preReqTitle}</Text>
      </FlexItem>
      <FlexItem>
        <Button variant="primary" margin="small" href={props.preReqLink}>
          {I18n.t('Go to Prerequisite')}
        </Button>
      </FlexItem>
    </Flex>
  )
}

StudentPrereq.propTypes = {
  preReqTitle: string.isRequired,
  preReqLink: string.isRequired
}

export default React.memo(StudentPrereq)
