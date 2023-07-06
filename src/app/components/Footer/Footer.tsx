import {
  FooterContainer,
  Menu,
  MenuColumn,
  MenuSubtitle,
  MenuItem,
  Links,
  PaymentLinks,
  SocialLinks,
  SocialLinkTitle,
} from "./Footer.styled";
import paypal from "../../../images/paypal.png";
import visa from "../../../images/visa.png";
import instagram from "../../../images/instagram.png";
import facebook from "../../../images/facebook.png";
import youtube from "../../../images/youtube.png";
import linkedin from "../../../images/linkedin.png";

export const FooterEl: React.FC = () => {
  return (
    <FooterContainer>
      <Menu>
        <MenuColumn>
          <MenuSubtitle>Shop-helfer</MenuSubtitle>
          <MenuItem to={"#"}>About Shop helfer</MenuItem>
          <MenuItem to={"#"}>Help</MenuItem>
        </MenuColumn>
        <MenuColumn>
          <MenuSubtitle>Buying by Shop-helfer</MenuSubtitle>
          <MenuItem to={"#"}>Placing your bid</MenuItem>
          <MenuItem to={"#"}>Buyer terms</MenuItem>
        </MenuColumn>
        <MenuColumn>
          <MenuSubtitle>Selling by Shop-helfer</MenuSubtitle>
          <MenuItem to={"#"}>Selling at aucion</MenuItem>
          <MenuItem to={"#"}>Seller terms</MenuItem>
        </MenuColumn>
        <MenuColumn>
          <MenuSubtitle>Terms & Policy</MenuSubtitle>
          <MenuItem to={"#"}>Terms of Use</MenuItem>
          <MenuItem to={"#"}>Privacy Policy</MenuItem>
          <MenuItem to={"#"}>Cookie Policy</MenuItem>
        </MenuColumn>
      </Menu>
      <Links>
        <PaymentLinks>
          <a href="#">
            <img src={paypal} alt="paypal" />{" "}
          </a>
          <a>
            <img src={visa} alt="visa" />
          </a>
        </PaymentLinks>
        <SocialLinks>
          <SocialLinkTitle>Follow us</SocialLinkTitle>
          <a href="#">
            <img src={instagram} alt="instagram" />{" "}
          </a>
          <a href="#">
            <img src={facebook} alt="facebook" />{" "}
          </a>
          <a href="#">
            <img src={youtube} alt="youtube" />{" "}
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin" />{" "}
          </a>
        </SocialLinks>
      </Links>
    </FooterContainer>
  );
};
