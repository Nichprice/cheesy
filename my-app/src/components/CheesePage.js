import AllCheese from "./AllCheese"
import CartCheese from "./CartCheese"

function CheesePage() {
  fetch("db.json")
  .then(r=>r.json())
  .then(d=>console.log(d))
  
  return (<>
  <AllCheese />
  <CartCheese />
  </>)
}

export default CheesePage;
