import CheckoutList from "../components/CheckoutList";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Payment from "../components/payment";

const mockData = [
  {
    id: 1,
    item: "apple",
    price: 5.99,
    src: "/images/store/apple.jpg",
    height: 1201,
    width: 1056,
    type: "jpg",
    quantity: 1,
  },
  {
    id: 2,
    item: "strawberry",
    price: 6.99,
    src: "/images/store/strawberry.jpg",
    height: 1201,
    width: 1056,
    type: "jpg",
    quantity: 1,
  },
];

function Checkout() {
  return (
    <div>
      <section>
        <MaxWidthWrapper>
          <CheckoutList checkoutItemsData={mockData} />

          <Payment />
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

export default Checkout;
