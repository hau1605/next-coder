export const getStaticPaths = async () => {
    const res = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map((coder) => {
        return {
            params: {id: coder.id.toString()},
        }
    });

    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id =  context.params.id;
    const res = await fetch("http://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return {
        props: {coder: data},
    }
}
export default function Detail({coder}) {
    return (
        <>
        <h1>{coder.name}</h1>
        <p>{coder.name}</p>
        <p>{coder.name}</p>
        <p>{coder.name}</p>
        <p>{coder.name}</p>
        <p>{coder.name}</p>
        </>
    )
}