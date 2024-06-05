import SinglePost from "@/components/single-post";
import { Suspense } from "react";

export default async function Page({ params }){


    return(
        <main className="px-7 pt-24 text-center">
        <Suspense fallback="Loading...">
            <SinglePost params={params} />
        </Suspense>

        <button className="bg-blue-500 text-white p-2 mt-10">
        Upvote
        </button>
        </main>
    );
}