import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NewTransactionButton>Nova transação</NewTransactionButton>
        <img src={Logo} alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
}
