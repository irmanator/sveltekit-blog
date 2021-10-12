<script context="module">

    export const load = async ({fetch}) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await res.json();
        return {
            props: {
                posts,
            }
        }
    }
</script>

<script>
import { paginate, LightPaginationNav } from 'svelte-paginate'
import DarkPaginationNav from 'svelte-paginate/src/DarkPaginationNav.svelte'
import CardAuthor from './authors/cardAuthor.svelte'
import Id from './authors/[id].svelte'

export let posts
let items = posts
let currentPage = 1
let pageSize = 4
$: paginatedItems = paginate({ items, pageSize, currentPage })

let searchItem = ""

// cari perubahan sesuai input pada post title dan body 
$: searchedPosts = posts.filter(post => {
    return post.title.includes(searchItem) || post.body.includes(searchItem)
})
// $: console.log(searchedPosts)
// $: console.log(searchItem)
</script>
<style>
    .posts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        margin-bottom: 20px;
    }
    .post{
        padding: 10px;
        border: 1px solid #ddd;
        box-shadow: 0 0 10px #ddd;
    }

    h2 {
        margin: 0;
    }

    .link {
        text-align: right;
    }
</style>
<h1>Posts</h1>
<p><i>Script context="module"</i>, dia akan merender sblm ter-load semua, shg bisa menyiapkan fetching data sblm tampil</p>
<p><i>a href pakai sveltekit:prefetch</i>, untuk mengeksekusi perintah fetching saat hover pada link</p>

<input type="text" placeholder="Search..." bind:value={searchItem} />
<br>
<br>
<div class="posts">
    {#if searchedPosts.length}
    {#each searchedPosts as item}
    <div class="post">
        <h2>{item.title.substring(0, 30)}</h2>
        <p>{item.body.substring(0, 120)}</p>
        <p class="link"><a href={`/blog/${item.id}`} sveltekit:prefetch>Read more</a></p>
    </div>
    {/each}
    {:else}
        <p>No post found with "{searchItem}" keyword</p>
    {/if}
</div>

<!-- <LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/> -->