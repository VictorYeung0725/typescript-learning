import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utils/formatCurrency';
import { useShoppingcart } from '../context/ShoppingCartContext';

type StoreItemsProps = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

export default function StoreItems({
  id,
  name,
  imgUrl,
  price,
}: StoreItemsProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingcart();

  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex align-item-baseline justify-content-between">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
              + Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-item-center flex-column"
              style={{ gap: '0.5rem' }}
            >
              <div
                className="d-flex align-item-center justify-content-center"
                style={{ gap: '0.5rem' }}
              >
                <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseItemQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
