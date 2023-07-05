import {
  FooterContain,
  Title,
  Logo,
  SVGGit,
  SVGInst,
  SVGTelega,
  TextContain,
  TextFooter
} from "./Footer.styled";



export const FooterEl: React.FC = () => {
  return <FooterContain>
    <Logo />
   
   <Title>Shop-helper</Title>

     <SVGGit></SVGGit>  {/* Хочу сюда добавить ссылку на наш гит с этим проектом */}
     <SVGInst></SVGInst> {/* Здесь не знаю что */}
     <SVGTelega></SVGTelega> {/* Здесь не знаю что */}

     <TextContain>
     <TextFooter> ©2023 | Shop-helper team | </TextFooter>
     </TextContain>

     <Title>Thank you for being with us!</Title>

  </FooterContain>;

};
