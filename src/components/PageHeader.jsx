import Button from "../components/Button";

function PageHeader({page,title,desc}){
    return(
        <div className="flex justify-between items-center ">
            <div className="m-12 font-sans text-md">
                <div className="">
                    <span className="">Inventory</span>
                    <span className=""> › </span>
                    <span className="">{page}</span>
                </div>
                <div className="font-playfair text-3xl py-3">
                    {title}
                </div>
                <div className="">
                    {desc}
                </div>
            </div>
            <div className="flex gap-3 mx-16 mt-10">
                <Button
                    label="Cancel"
                    variant="outline"
                />

                <Button
                    label="Add New Product"
                    variant="primary"
                />
            </div>
        </div>
    )
}

export default PageHeader;