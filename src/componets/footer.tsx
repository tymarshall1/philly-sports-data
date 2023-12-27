type FooterProps = {
  colorChoosen: string;
};

export default function Footer(props: FooterProps) {
  return (
    <footer
      className={`text-3xl p-4 text-white text-center bg-gradient-to-l mt-auto ${props.colorChoosen}`}
    >
      Tyler1@github.com
    </footer>
  );
}
