type FooterProps = {
  colorChosen: string;
};

export default function Footer(props: FooterProps) {
  return (
    <footer
      className={`text-4xl font-black p-4 text-white text-center bg-gradient-to-l mt-auto ${props.colorChosen}`}
    ></footer>
  );
}
