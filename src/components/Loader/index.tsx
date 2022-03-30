import React, { ReactElement, VFC } from 'react'

import Text from '@components/Text'

const Loader:VFC = (): ReactElement => (
  <Text
    as="h3"
    textAlign="center"
    size="large"
    mt="xLarge"
  >
    Chargement...
  </Text>
)

export default Loader
