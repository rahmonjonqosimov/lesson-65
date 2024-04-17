import ShopAll from "./components/shopAll/ShopAll";
import Banner from "./components/banner/Banner";
import "./App.css";

function App() {
  let links1 = [
    "Galaxy S24 Ultra",
    " Galaxy S24+",
    " Galaxy Book4 Ultra",
    "Galaxy Tab S9 Series",
    "Galaxy Watch6 Series",
  ];
  let links2 = [" The Frame", "The Freestyle 2nd Gen", "Music Frame"];
  let links3 = ["Bespoke AI", " Bespoke Refrigerator", " Bespoke Laundry"];
  let links4 = ["Certified Re-Newed", "How to recycle"];
  return (
    <div className="App container">
      <ShopAll />
      <Banner
        title="Mobile & Computing"
        links={links1}
        bg="https://images.samsung.com/is/image/samsung/assets/us/home/04152024/SDSAC-7185-S24U-HP-LOB-FullBleed-DT-1440x810.jpg?$1440_810_JPG$"
        name="Galaxy S24 Ultra"
        desc="Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers.  Try it for 30 days or get a full refund."
        btn="Buy Now"
        btnColor="#000"
        btnTextColor="#fff"
      />
      <Banner
        title="TV & Audio"
        links={links2}
        bg="https://images.samsung.com/is/image/samsung/assets/us/home/04112024-2/Homepage_LOB_LifestyleWK_TheFrame_Desktop_1440x810.jpg?$1440_810_JPG$"
        name="Buy. Bezel. Beauty."
        desc="Buy the Frame, get a Customizable Bezel on us."
        btn="Buy Now"
        btnColor="#000"
        btnTextColor="#fff"
      />
      <Banner
        title="New Bespoke AI Appliances"
        links={links3}
        bg="https://images.samsung.com/is/image/samsung/assets/us/home/04022024/LOB_Bespoke-AI.png?$1440_810_JPG$"
        name="Buy. Bezel. Beauty."
        desc="Pre-order and save up to $1,200 on our latest technology."
        btn="Pre-order"
        btnColor="#000"
        btnTextColor="#fff"
      />
      <Banner
        title="Sustainability"
        links={links4}
        bg="https://images.samsung.com/is/image/samsung/assets/us/home/03252024-2/sustainability-1-dt.jpg?$1440_810_JPG$"
        name="Sustainability"
        desc="Get a refurbished Certified Re-Newed smartphone with the features you love."
        btn="Learn More"
        btnColor="#fff"
        btnTextColor="#000"
      />
    </div>
  );
}

export default App;
