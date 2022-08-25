import { SummaryCard, SummaryContainer } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionContext";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from "phosphor-react";
import { useContext } from "react";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>total</span>
          <CurrencyCircleDollar size={32} color="#fff" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
