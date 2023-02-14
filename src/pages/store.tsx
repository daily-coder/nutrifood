import Meta from "../components/Meta";
import StoreList from "../components/StoreList";
import STORE_ITEMS_DATA from "../data/store";
import { Item, StoreItemsData } from "../types";
import getImageDimensions from "../utils/get-image-dimensions";

function Store({ storeItemsData }: { storeItemsData: StoreItemsData }) {
  return (
    <div>
      <Meta title="NutriFood Store" description="NutriFood online store" />

      <StoreList storeItemsData={storeItemsData} />
    </div>
  );
}

function withImageDimensions(items: Item[]) {
  return items.map((item) => {
    const metaData = getImageDimensions(item.src);
    return { ...item, ...metaData };
  });
}

export async function getStaticProps() {
  const fruits = withImageDimensions(STORE_ITEMS_DATA.fruits);
  const vegetables = withImageDimensions(STORE_ITEMS_DATA.vegetables);
  const nuts = withImageDimensions(STORE_ITEMS_DATA.nuts);

  const storeItemsData = {
    fruits,
    vegetables,
    nuts,
  };

  return {
    props: {
      storeItemsData,
    },
  };
}

export default Store;
