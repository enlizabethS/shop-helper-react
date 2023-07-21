import {
  FooterContain,
  FirstBlock,
  LogoBox,
  Title,
  Logo,
  SocialLinksBox,
  SocialLink,
  SVGGit,
  SVGInst,
  SVGTelega,
  SecondBlock,
  TextFooter,
} from "./Footer.styled";

export const FooterEl: React.FC = () => {
  return (
    <FooterContain>
      <FirstBlock>
        <LogoBox>
          <Logo />
          <Title>Shop-helper</Title>
        </LogoBox>
        <SocialLinksBox>
          <SocialLink href="https://github.com/enlizabethS/shop-helper-react/tree/main">
            <SVGGit />{" "}
            {/* Хочу сюда добавить ссылку на наш гит с этим проектом */}
          </SocialLink>
          <SocialLink href="https://www.instagram.com/">
            <SVGInst /> {/* Здесь не знаю что */}
          </SocialLink>
          <SocialLink href="https://web.telegram.org/a/">
            <SVGTelega /> {/* Здесь не знаю что */}
          </SocialLink>
        </SocialLinksBox>
        <Title>Thank you for being with us!</Title>
      </FirstBlock>
      <SecondBlock>
        <TextFooter> ©2023 | Shop-helper team | </TextFooter>
      </SecondBlock>
    </FooterContain>
  );
};
