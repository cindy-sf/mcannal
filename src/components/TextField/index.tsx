import React, { ChangeEvent, ReactElement, useState, VFC } from 'react'
import Image from 'next/image'

import { Icon, Input, InputWrapper } from './index.styles'
import SearchIcon from '@assets/icons/search.png'

interface Props {
  onSubmit: () => void
}

const TextField:VFC<Props> = ({ onSubmit }): ReactElement => {
  const [value, setValue] = useState<string>('')

  const handleSubmit = (): void => {
    if (value.trim().length > 0) onSubmit()
  }
  return (
    <InputWrapper>
      <Input
        type="search"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => setValue(e.target.value)}
        placeholder="Rechercher..."
        onKeyPress={(event: React.KeyboardEvent): void => {
          if (event.key == 'Enter') handleSubmit()
        }}
        spellCheck={false}
      />
      <Icon onClick={handleSubmit}>
        <Image src={SearchIcon} width={24} height={24} layout="fixed" />
      </Icon>
    </InputWrapper>
  )
}

export default TextField
