import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useSelector } from 'react-redux';
import { selectCart } from '../../selectors/cartSelectors';

export default function Order() {
  const cart = useSelector(selectCart);

  const lineItemNodes = cart.map(lineItem => 
    <tr>
      <td>RESTAURANT HERE</td>
      <td>{lineItem.offering}</td>
      <td>{lineItem.quantity}</td>
      <td>PICKUP HERE</td>
      <td>{lineItem.price}</td>
      <td>TOTAL HERE</td>
    </tr>
);

  return (
    <div>
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Offering</th>
            <th>Quantity</th>
            <th>Pick-Up Date</th>
            <th>Price (Ind.)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          { lineItemNodes }
        </tbody>
        <tfoot>
        </tfoot>
      </table>
      <CheckoutForm />
    </div>
  );
}
