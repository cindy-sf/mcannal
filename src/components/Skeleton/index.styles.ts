import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
`

export const Block = styled.div<{ width?: number, height?: number }>`
  width: ${({ width }) => width ? `${width}rem` : '30rem'};
  height: ${({ height }) => height ? `${height}rem` : 'initial'};
  background-color: #E5E5E5;
  padding: 1.4rem;
  border-radius: 2.6rem;
  margin-bottom: 1.6rem;
  margin-right: 1.6rem;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1  ;
    background-image: linear-gradient(
      90deg,
      rgba(255,255,255,0) 0,
      rgba(255,255,255,0.2) 20%,
      rgba(255,255,255,0.7) 60%,
      rgba(255,255,255,0)
    );
    transform: translateX(-100%);
    animation: ${shimmer} 2s ease-in-out infinite;
  }
`

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.4rem;
`

export const Section = styled.div`
  display: flex;
  overflow: hidden;
  padding-top: 1.6rem;
`
