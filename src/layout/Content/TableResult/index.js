import './style.css';

function TableResult({lineItems}) {
  const getTotalPrice = () => lineItems.reduce(
    (totalPrice, item) => totalPrice + Number(item.price),
    0
  );

  const getRoundedNumber = (number) => Math.round(number * 100) / 100;

  return (
  lineItems ? 
    (<>
      <tr className="total">
        <td></td>
        <td>Total: {getRoundedNumber(getTotalPrice())} EUR</td>
      </tr>
      <tr className="vat">
        <td></td>
        <td>VAT (19%): {getRoundedNumber(getTotalPrice() * 0.19)} EUR</td>
      </tr>
    </>) : <></>
  )
}

export default TableResult;