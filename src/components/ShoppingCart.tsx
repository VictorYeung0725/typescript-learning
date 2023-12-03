import { Offcanvas, OffcanvasTitle, Stack } from 'react-bootstrap';
import { useShoppingcart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import { formatCurrency } from '../utils/formatCurrency';
import storeItems from '../data/items.json';

type ShoppingCartTypeProps = {
  isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCartTypeProps) {
  const { closeCart, cartItems } = useShoppingcart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
