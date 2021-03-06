import { Dimensions, Platform } from "react-native";
import Constants from "expo-constants";

var { height, width } = Dimensions.get("window");
export default {
  USER: '',
  LOCATION: '',
  USER_DATA: 'userData',
  USER_LOCATION: 'userLocation',
  USER_CART: 'cart',
  CART: '',
  USER_CART_TOTAL: 'cart_total',
  CART_TOTAL: '',
  USER_BG: 'background',
  USER_BACKGROUND: '',
  CONSTANT: {
    STATUSBAR: Constants.statusBarHeight,
    DEVICETYPE: Platform.OS,
    HEIGHT: height,
    WIDTH: width,
  },
  FONT: {
    ITALIC: "Italianoo-Italic",
    Yeon_Sung: "Yeon-Sung",
    Simonetta_Regular: "Simonetta-Regular",
    Simonetta: "Simonetta-Black",
    ITCBLKAD:"ITCBLKAD",
    GEORGIA: 'GEROGIA'
  },
  COLOR: {
    PRIMARY: "#009FFF",
    PRIMARYBUTTON: "#000",
    PRIMARYTEXT: "#000",
    SECONDARYTEXT: "#fff",
  },
  ASSETS: {
    DELIVERY: require("./assets/delivery_man.jpg"),
    DELIVERY_PICKUP_OPTION: require("./assets/delivery_pickup.png"),
    DELIVERY_PICKUP_DINEIN_OPTION: require("./assets/delivery_pickup_dinein.png"),
    DELIVERY_DINEIN_OPTION: require("./assets/delivery_dinein.png"),
    PICKUP_DINEIN_OPTION: require("./assets/pickup_dinein.png"),
    DELIVERY_OPTION: require("./assets/delivery.png"),
    PICKUP_OPTION: require("./assets/pickup.png"),
    DINEIN_OPTION: require("./assets/dinein.png"),
    PAYPAL: require("./assets/paypal.jpg"),
    SHOPING: require("./assets/shoping.png"),
    PARTY_PACKAGE: require("./assets/party_package1.png"),
    TABLE: require("./assets/table.png"),
    LOGO: require("./assets/logo.png"),
    //this is changed from image.png
    BGIMAGE: require("./assets/home5.png"),
    PROFILE: require("./assets/profile.jpg"),
    ORDER: require("./assets/order.png"),
    RESTAURANTBG: require("./assets/combo.png"),
    PIZZA: require("./assets/pizza.png"),
    TWO: require("./assets/two.png"),
    THREE: require("./assets/three.png"),
    FOUR: require("./assets/four.png"),
    FIVE: require("./assets/five.png"),
    BURGER: require("./assets/burger.png"),
    FACEBOOK: require("./assets/facebook.png"),
    BACKARROW: require("./assets/backArrow.png"),
    GRUBICON: require("./assets/grubIcon.png"),
    GRUB: require("./assets/grub.png"),
    HOUSE: require("./assets/house.png"),
    BACKGROUND: require("./assets/background.gif"),
    GIFT: require("./assets/gift.png"),
    COIN: require("./assets/coin.png"),
    REDEEM: require("./assets/redeem.png"),
    RESTO: require("./assets/restaurant.png"),
    FOOD: require("./assets/food.png"),
    INFORMATION: require("./assets/information.png"),
    INQUIRIES: require("./assets/inquiries.png"),
    SUPPORT: require("./assets/support.png"),
    CHIPS: require("./assets/chips.png"),
    POPCORN: require("./assets/popcorn.png"),
    ALMOND: require("./assets/almond.png"),
    DRYFRUIT: require("./assets/dryfruit.png"),
    SERVICE: require("./assets/service.png"),
    GIFTGIF: require("./assets/sendGift.gif"),
    JAR: require("./assets/jar.png"),
    CHOCO: require("./assets/chocolate.gif"),
    SOCIAL: require("./assets/social.png"),
    MESSANGER: require("./assets/messanger.png"),
    WHATSAPP: require("./assets/whatsapp.png"),
    MAIL: require("./assets/mail.png"),
    MESSAGE: require("./assets/message.png"),
    Image1: require("./assets/image1.jpg"),
    Image2: require("./assets/image2.jpg"),
    Image11: require("./assets/image11.jpg"),
    Image12: require("./assets/image12.jpg"),
    Image13: require("./assets/image13.jpg"),
    Image14: require("./assets/image14.jpg"),
    Image15: require("./assets/image15.jpg"),
    FOOD1: require("./assets/food1.jpg"),
    INSTA: require("./assets/insta.png"),
    SNAP: require("./assets/snap.png"),
    SUSHI: require("./assets/sushi.jpg"),
    JARCOIN: require("./assets/jar.gif"),
    CUSTOMERSUPPORT: require("./assets/customerSupport.png"),
    TAKE_AWAY: require("./assets/take.jpg"),
    BADGE: require("./assets/badge.jpg"),
    COLLECT: require("./assets/collect.jpg"),
    MEMBERS: require("./assets/mother.png"),
    PAYMENTS: require("./assets/bill.png"),
    TIMER: require("./assets/timer.png"),
    CALENDAR: require("./assets/calendar.png"),
    REPORT: require("./assets/calculator.png"),
    COMMUNICATION: require("./assets/communication.png"),
    MONEYTRANSFER: require("./assets/moneytransfer.png"),
    CARD: require("./assets/bank.png"),
    CHEF: require("./assets/chef.png"),
    APPLE: require("./assets/apple.png"),
    GROUP_INTRO_BG: require("./assets/group_intro_bg.png"),
    SEND_COIN_BG: require("./assets/send_coin_bg.png"),
    COINS: require("./assets/coins.png"),
    FOOD_GIFT: require("./assets/food_gift.png"),
    EMPTY_BASKET: require("./assets/emptybasket.png"),
    LOADING: require("./assets/loading.gif"),

    MAP_MARKER: require("./assets/emptyNumber1.png"),
    MAP_MARKER_NUMBER: require("./assets/innerNumber.png"),
    MAP_LOAD: require("./assets/circle.png"),
    ICON: require("./assets/icon.png"),
    GIFTPNG: require("./assets/sendGift.png"),
    VIDEOMARKER: require("./assets/video-marker1.png"),
  },
};
