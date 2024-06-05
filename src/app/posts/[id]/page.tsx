import SinglePost from "@/components/single-post";
import { Suspense } from "react";

export default function Page({ params }: { params: { id: number}}){

    return(
        <main className="px-7 pt-24 text-center">
        <Suspense fallback="Loading...">
            <SinglePost params={params} />
        </Suspense>
        </main>
        
    );
}