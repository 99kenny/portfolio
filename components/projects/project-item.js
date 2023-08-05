import Image from "next/Image"

export default function ProjectItem(data){
    const imgSrc = data.data.cover.external.url
    const projectName = data.data.properties.name.title[0].plain_text; 
    const link = data.data.properties.url.url;
    const description = data.data.properties.description.rich_text[0].plain_text;
    const tags = data.data.properties.tags.multi_select;
    
    return(
        <div className="flex flex-col m-3 bg-slate-700 rounded-xl">
            <a href={link}>
                <Image
                        src={imgSrc}
                        width="300"
                        height="300"
                        layout="responsive"
                />
                <div className="flex flex-col p-4">
                    <h1 className="text-2xl font-bold">{projectName}</h1>
                    <p className="m-t-1">{description}</p>       
                    <div className="flex items-start mt-2">
                            {tags.map((aTag)=> (
                                <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                            ))}
                    </div> 
                </div>
            </a>
        </div>
    );
}