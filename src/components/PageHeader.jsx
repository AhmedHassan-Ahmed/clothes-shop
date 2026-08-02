import Button from "../components/Button";

function PageHeader({page,title,desc}){
    return(
        <div className="
                    flex flex-col 
                    md:flex-row 
                    justify-between items-start 
                    gap-8
                    mt-10 mx-10
                    p-3 
                    ">
            <div className=" font-sans text-md">
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

                <div className="
                    flex flex-col 
                    md:flex-row 
                    gap-3
                    w-full 
                    md:w-auto md:mt-16
                ">
                    <Button
                        label="Cancel"
                        variant="outline"
                    />

                    <Button
                        label="Save Product"
                        variant="primary"
                    />
            </div>
        </div>
    )
}

export default PageHeader;