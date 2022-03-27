import React, { ChangeEvent, ReactElement, useState, VFC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import SearchIcon from '@assets/icons/search.svg'

import { Icon, Input, InputWrapper } from './index.styles'

interface Props {
  initialValue?: string
}

const TextField:VFC<Props> = ({ initialValue = '' }): ReactElement => {
  const [value, setValue] = useState<string>(initialValue)
  const router = useRouter()
 
  const handleSubmit = (): void => {
    const trimedValue = value.trim()

    if (trimedValue.length > 0) {
      router.push({
        pathname: '/search',
        query: { q: trimedValue },
      })
    }
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
