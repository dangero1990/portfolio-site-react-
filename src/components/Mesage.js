import useTypewritter from '../hooks/useTypewriter';

//Component used allows you to still use to use the useTypewritter hook on elements that are conditionally rendered. Typewritter effect was firing off on elements when the elements weren't on screen.
function Message({ text }) {
  const message = useTypewritter(text);

  return <p>{message}</p>;
}

export default Message;
