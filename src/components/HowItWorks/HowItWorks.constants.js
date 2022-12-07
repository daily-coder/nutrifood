import BowlFoodIcon from "../../../public/svg/bowl-food.svg";
import HouseIcon from "../../../public/svg/house.svg";
import TruckIcon from "../../../public/svg/truck.svg";
import UserIcon from "../../../public/svg/user.svg";

// Note:  WorkIcon property has uppercase first letter.

const WORK_ITEMS_DATA = [
  {
    title: "join us",
    WorkIcon: UserIcon,
    iconSize: 40,
    description:
      "You don't to worry whether food is healthy or not. Anything you order is perfectly healthy.",
  },
  {
    title: "order on route",
    WorkIcon: TruckIcon,
    iconSize: 54,
    description:
      "We take multiple steps to ensure that the order is delivered without any mishaps.",
  },
  {
    title: "home delivery",
    WorkIcon: HouseIcon,
    iconSize: 40,
    description:
      "Our courier team are best in class, they will make sure the order reaches your door.",
  },
  {
    title: "enjoy the food",
    WorkIcon: BowlFoodIcon,
    iconSize: 40,
    description:
      "Enjoy the food with your friends and family. If you like it order it again.",
  },
];

export default WORK_ITEMS_DATA;
