import styled from "styled-components";

import { useCartItems } from "../CartProvider";

const Wrapper = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
`;

const RowHead = styled.th`
  text-align: left;
  width: 50%;
  text-transform: capitalize;
  font-weight: var(--font-weight-500);
`;

const TableData = styled.td`
  text-align: right;
`;

const Divider = styled.div`
  border-top: 1px solid var(--color-silver-dark);
  padding-top: var(--space-24);
  margin-top: var(--space-24);
`;

function SummaryTable() {
  const cartItems = useCartItems();

  // calculation is not expensive enough to use useMemo;
  const result = cartItems.reduce(
    (total, { quantity, price }) => total + quantity * price,
    0
  );

  const subtotal = result.toFixed(2);

  return (
    <Wrapper>
      <tbody>
        <tr>
          <td colSpan="2">
            <Divider />
          </td>
        </tr>
        <tr>
          <RowHead>subtotal</RowHead>
          <TableData>${subtotal}</TableData>
        </tr>
        <tr>
          <RowHead>shipping cost</RowHead>
          <TableData>0</TableData>
        </tr>
        <tr>
          <td colSpan="2">
            <Divider />
          </td>
        </tr>
        <tr>
          <RowHead>total</RowHead>
          <TableData>${subtotal}</TableData>
        </tr>
        <tr>
          <td colSpan="2">
            <Divider />
          </td>
        </tr>
      </tbody>
    </Wrapper>
  );
}

export default SummaryTable;
