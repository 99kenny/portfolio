import Layout from '../components/layout'
import Head from "next/head"
import { NOTION_TOKEN, NOTION_DB_ID} from "../config/index";
import ProjectItem from "../components/projects/project-item"
export default function Projects({projects}) {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10">
                <Head>
                    <title></title>
                    <meta name="description" content="portfolio" />
                </Head>
                <h1 className="text-4xl font-bold m-6 sm:text-6xl">Projects</h1>
                
                <div className="grid md:grid-cols-4 grid-cols-2 gap-8 m-6 py-10">
                    {projects.map((aProj)=>(
                        <ProjectItem key={aProj} data={aProj}/>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

//빌드시 실행
export async function getStaticProps(context) {
    const { Client } = require('@notionhq/client');
    const notion = new Client({ auth: NOTION_TOKEN });

    const databaseId = NOTION_DB_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: 'name',
                direction: 'ascending',
            },
        ],
    });
    
    const projects = response.results.map((aProj)=>(
        aProj
    ));
    return {
        props: {projects},
    }
}