import React from "react";

const ShopAll = () => {
  let links = [
    "For You",
    " Mobile & Computing",
    " TV & Audio",
    " Home Appliances",
    " Samsung Live",
    " For Business",
  ];
  let items = links?.map((el, i) => (
    <li key={i}>
      <a href="">{el}</a>
    </li>
  ));
  let products = [
    {
      id: 1,
      url: "https://image-us.samsung.com/SamsungUS/home/home-appliances/ranges/gas/nsg6dg8500sraa/gallery/NSG6DG8500SR_01_SCOM.jpg?$product-card-small-jpg$",
      title:
        "Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera & Illuminated Precision Knobs",
      price: "Save $600",
      form: "$1499",
      btn: "Pre-order now",
    },
    {
      id: 2,
      url: "https://image-us.samsung.com/us/mobile-audio/galaxy-buds2-pro/gallery/graphite/Q4B4B2C-86-SM-R510_001_Front_Graphite_RGB-GalleryImage-1600x1200.jpg?$product-card-small-jpg$",
      title: "Galaxy Buds2 Pro",
      price: "Save up to $40.",
      form: "$189.99 before eligible trade-in.",
      btn: "Buy now",
    },
    {
      id: 3,
      url: "https://image-us.samsung.com/SamsungUS/home/easy-asset/tbsr-9125/03212023/Q990C.jpg?$product-card-small-jpg$",
      title: "Q-series 11.1.4 ch. Wireless Dolby ATMOS Soundbar",
      price: "Save $500",
      form: "$1399.99",
      btn: "Buy now",
    },
    {
      id: 4,
      url: "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/4-door-flex/02082024/RF23DB990012_01_White_Glass_SCOM.jpg?$product-card-small-jpg$",
      title: "23 cu. ft. Bespoke 4-Door Flex Refrigerator with AI Family Hub",
      price: "Save $1200",
      form: "$3899",
      btn: "Pre-order now",
    },
    {
      id: 5,
      url: "https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E3_TitaniumGray_Lockup_1600x1200.jpg?$product-card-small-jpg$",
      title: "Galaxy S24 Ultra, 1TB (Unlocked)",
      price: "Save up to $150.",
      form: " From $1509.99 before eligible trade-in.",
      btn: "Buy now",
    },
    {
      id: 6,
      url: "https://image-us.samsung.com/SamsungUS/home/home-appliances/washers/all-in-one-washer-dryer-combo/wd53dba900hza1/gallery/WD53DBA900HZA1_01_Dark_Steel_SCOM.jpg?$product-card-small-jpg$",
      title:
        "Bespoke 5.3 cu. ft. All-in-One AI Laundry Combo Ultra Capacity Washer and Ventless Heat Pump Dryer",
      price: "Save $1100",
      form: "$2199",
      btn: "Pre-order now",
    },
  ];
  let mappingProducts = products?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.url} alt={el.title} />
      <h4 title={el.title}>{el.title}</h4>
      <h5>{el.price}</h5>
      <p>From {el.form}</p>
      <button>{el.btn}</button>
    </div>
  ));
  console.log(products);
  return (
    <div className="shop-all">
      <h1>Shop all latest offers and innovations</h1>
      <ul className="links">{items}</ul>
      <div className="cards">{mappingProducts}</div>
    </div>
  );
};

export default ShopAll;
