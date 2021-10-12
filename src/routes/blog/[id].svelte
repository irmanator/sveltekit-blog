<script context="module">
export const load = async ({page, fetch}) => {
    // ini berlaku untuk semua sveltekit
    const pid = page.params.id;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`);
    const post = await res.json();

    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await userRes.json();
    return {
        props: {
            post,
            user,
        }
    }
}
</script>

<script>
    export let post;
    export let user;
</script>

<style>
    .post {
        font-family: arial;
        padding: 50px auto;
    }
</style>

<div class="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Written by <a href={`/authors/${post.userId}`}>{user.name}</a> </p>
        {JSON.stringify({user})}
</div>
