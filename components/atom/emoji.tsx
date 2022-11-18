/* eslint-disable */
// @ts-ignore
import emojiUnicode from 'emoji-unicode';

export default function Emoji({ emoji }: { emoji: string }) {
  return (
    <img
      loading='lazy'
      width='20'
      height='20'
      alt={emoji}
      src={`https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/${emojiUnicode(emoji).replace(/\s/g, '-')}.svg`}
    />
  );
}
