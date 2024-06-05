export default async function Page(){

    return(
        <main className="px-7 pt-24 text-center">
            <h1 className="font-semibold text-5xl mb-7">{post.title}</h1>
            <p className="max-w-[700px] mx-auto">{post.body}</p>
        </main>
    );
}