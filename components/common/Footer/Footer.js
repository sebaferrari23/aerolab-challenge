import { FooterWrapper, FooterLink } from './styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLink
        href="https://github.com/sebaferrari23/aerolab-challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        View this repository
      </FooterLink>
    </FooterWrapper>
    );
};

export default Footer;
