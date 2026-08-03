import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function PageHeader({page,title,desc, onSave}){
    const navigate = useNavigate();
    return(
        <div className="
                    flex flex-col 
                    md:flex-row 
                    justify-between items-start 
                    gap-6
                    p-1 
                    ">
            <div className=" font-sans text-md">
                <div className="">
                    <span className="">Inventory</span>
                    <span className=""> › </span>
                    <span className="">{page}</span>
                </div>
                <div className="font-playfair text-3xl py-3 text-green-700">
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
                        onClick={() => navigate("/")}
                    />

                    <Button
                        label="Save Product"
                        variant="primary"
                        onClick = {onSave}
                    />
            </div>
        </div>
    )
}

export default PageHeader;