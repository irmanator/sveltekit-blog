<script context="module">
    import ContactCard from './cardAuthor.svelte';
    export const load = async ({page, fetch}) => {
        // ini berlaku untuk semua sveltekit
        const pid = page.params.id;
    
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${pid}`);
        const user = await res.json();
    
        return {
            props: {
                user,
            }
        }
    }
    </script>
    
    <script>
import { add_resize_listener } from "svelte/internal";

        export let user;
    </script>
    
    <ContactCard>
        <span slot="name">
            {user.name}
        </span>
        <span slot="address">
            {user.address.street},
            {user.address.suite},
            {user.address.city},
            {user.address.zipcode}
            <a href={`https://www.google.com/maps/@${user.address.geo.lat},${user.address.geo.lng},18z`}>Go to</a>
        </span>
        <span slot="email">
            {user.email}
        </span>
            
    </ContactCard>
    