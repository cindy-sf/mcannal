import React from 'react'
import Image, { StaticImageData } from 'next/image'

import FullStarIcon from '@assets/icons/full-star.svg'
import MidStarIcon from '@assets/icons/mid-star.svg'
import UnStarIcon from '@assets/icons/unstar.svg'

import { RatingWrapper } from './index.styles'

interface StarsProperties {
  src: StaticImageData
  type: 'full' | 'mid' | 'empty'
}

const RatingStar = ({ notation }: { notation: number }) => {
  // For getting an average on 5
  const average = Math.round(notation) / 2
  const stars:StarsProperties[] = []

  const fillStar = (nb: number, star: StarsProperties): void => {
    for (let i = 0; i < nb; i += 1) stars.push(star)
  }

  // For fillin with full stars
  fillStar(Math.floor(average), { src: FullStarIcon, type: 'full' })

  // For fillin with mid stars
  fillStar(
    average - Math.floor(average) !== 0 ? 1 : 0,
    { src: MidStarIcon, type: 'mid' }
  )

  // For fillin with unstars
  fillStar(
    Math.floor(5 - average),
    { src: UnStarIcon, type: 'empty' }
  )

  return (
    <RatingWrapper>
      {stars.map(({ src, type }, index: number) => (
        <span key={index}>
          <Image role="img" src={src} width={20} height={20} data-testid={`${type}-star`} />
        </span>
      ))}
    </RatingWrapper>
  )
}

export default RatingStar
