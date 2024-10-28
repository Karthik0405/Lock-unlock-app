// Write your code here
import {useState} from 'react'
import {
  BgContainer,
  ImageElement,
  HeadingElement,
  ButtonElement,
} from './styledComponents'

const Unlock = () => {
  const [isLoked, changeLock] = useState(true)
  const onChangeLock = () => {
    changeLock(prevState => !prevState)
  }
  const imgUrl = isLoked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const imgAlt = isLoked ? 'lock' : 'unlock'
  const lockEle = isLoked ? 'Locked' : 'Unlocked'
  const buttonEle = isLoked ? 'Unlock' : 'Lock'
  return (
    <BgContainer>
      <ImageElement src={imgUrl} alt={imgAlt} />
      <HeadingElement>Your Device is {lockEle}</HeadingElement>
      <ButtonElement type="button" onClick={onChangeLock}>
        {buttonEle}
      </ButtonElement>
    </BgContainer>
  )
}

export default Unlock
