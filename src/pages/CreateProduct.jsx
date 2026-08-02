import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader"
function CreateProduct() {
  return (
    <div className="">
        <Navbar />
        <PageHeader 
            page = "Add new Product"
            title = "Product Creation"
            desc = "Refine your luxury catalog with detailed specifications and high-end imagery."
        />
        
    </div>
  );
}

export default CreateProduct;