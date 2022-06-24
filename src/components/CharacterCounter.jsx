import { atom, useRecoilState } from 'recoil'

export const textState = atom({
  key: 'textState',
  default: 'dfdf',
})

function TextInput() {
  const [text, setText] = useRecoilState(textState)
  
    const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
    </div>
  )
}