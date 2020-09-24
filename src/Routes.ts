
import {wrap} from 'svelte-spa-router/wrap'

import Home from './pages/Home.svelte';
import NotFound from './pages/NotFound.svelte';

export default {
    '/': Home,
    // '/user/:id?': wrap({
    //     asyncComponent: () => import('./routes/User.svelte')
    // }),
    '*': NotFound,
}