import "./Product.css";
import Price from "./Price";

export default function Product({title, idx}) {

  let descriptions = [
    ["8000 DPI", "5 Programable buttons"],
    ["intuitive touch surface", "Designed for ipad PRO"],
    ["intuitive touch surface", "Designed for ipad PRO"],
    ["Wireless", "Optical orientation"]
];

let oldPrices = ["12495", "11900", "1599", "599" ];
    let newPrices = ["8999", "9199", "899", "278"];
  return (

    <div className="product">

      <h4> {title} </h4>
      <p>{descriptions[idx][0]}</p>
      <p>{descriptions[idx][1]}</p>

      <Price oldPrice = { oldPrices[idx] } newPrice = {newPrices[idx]}/>
      
    </div>
  );
}

