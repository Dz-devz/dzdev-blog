export default async function SinglePost({params}: {params: {id: number}}) {
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const post = await response.json();
  return (
    <>
        <h1 className="font-semibold text-5xl mb-7">{post.title}</h1>
        <p className="max-w-[700px] mx-auto">{post.body}</p>
    </>
  )
}
