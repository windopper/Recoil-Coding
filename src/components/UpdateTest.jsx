import { atom, selector, useRecoilValue } from 'recoil'
import { textState } from './CharacterCounter'

const getText = selector({
  key: 'getText',
  get: ({get}) => {
    const text = get(textState);
    return text;
  }
})

export default function UpdateTest() {
  const text = useRecoilValue(getText)
  console.log(text)
  return (
    null
  )
}

