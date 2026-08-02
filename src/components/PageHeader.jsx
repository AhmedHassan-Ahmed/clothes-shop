function PageHeader({page,title,desc}){
    return(
        <div className="m-12 font-sans text-md grid grid-col-2">
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
    )
}

export default PageHeader;