import TableHeading from "./TableHeading";
import TableContent from "./TableContent";
import TableResult from "./TableResult";

function Content({ lineItems, setLineItems }) {
  return (
  <>
    <TableHeading />
    <TableContent lineItems={lineItems} setLineItems={setLineItems} />
    <TableResult lineItems={lineItems} />
  </>
  )
}

export default Content;