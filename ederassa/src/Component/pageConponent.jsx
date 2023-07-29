import React from "react";

function PageComponent({title, button = "", children}){
    return(
        <>
            <header className="w-full bg-white shadow flex  justify-center gap-[760px]">
            <div className=" max-w-10 px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
            </div>
                {button}
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </>
    )
}

export default PageComponent