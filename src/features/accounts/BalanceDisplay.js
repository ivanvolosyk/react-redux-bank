import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function MapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(MapStateToProps)(BalanceDisplay);
