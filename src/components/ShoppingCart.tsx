import { Offcanvas, OffcanvasTitle, Stack } from 'react-bootstrap';
import { useShoppingcart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';

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
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
