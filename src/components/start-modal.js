import React from 'react'
import styled from 'styled-components'
import * as Icons from './icons'

function StartModal(props) {
  let { onClickStartButton } = props

  return (
    <Wrapper>
      <Title>Elementary Cellular Automaton</Title>

      <Content>
        <ItemList>
          <Item extraCss="margin-bottom: 5px;">
            <RoundBorder extraCss="margin-right: 5px;">
              <Icons.Refresh size={14} />
            </RoundBorder>
            Refresh
          </Item>

          <Item extraCss="margin-bottom: 5px;">
            <RoundBorder extraCss="margin-right: 5px;">
              <Icons.Play size={14} />
            </RoundBorder>
            Play
          </Item>

          <Item extraCss="margin-bottom: 5px;">
            <RoundBorder extraCss="margin-right: 5px;">
              <Icons.Pause size={14} />
            </RoundBorder>
            Pause
          </Item>
        </ItemList>

        <Description>
          You can pause and enter the rule, between 0 and 255, that you want
        </Description>
      </Content>

      <StartButton onClick={onClickStartButton}>START</StartButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(64, 70, 82, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`

const Title = styled.h1`
  margin-bottom: 10px;
  text-align: center;
`

const Content = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemList = styled.div``

const Item = styled.p`
  display: flex;
  align-items: center;
  ${props => props.extraCss}
`

const Description = styled.p`
  padding: 0 5px;
  text-align: center;
`

const RoundBorder = styled.span`
  border: 1px solid white;
  border-radius: 50px;
  padding: 2px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${props => props.extraCss}
`

const StartButton = styled.div`
  border: 2px solid white;
  border-radius: 3px;
  padding: 6px 12px;
  font-size: 24px;
  cursor: pointer;
`

export default StartModal
