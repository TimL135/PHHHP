import * as vue from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { importPageComponent } from '@/import-page-component';
import './bootstrap';

const pages = import.meta.glob('../Pages/**/*.vue');
createInertiaApp({
    resolve: name => importPageComponent(name, { ...pages }),
    setup({ el, app, props, plugin }) {
        const VueApp = vue.createApp({ render: () => vue.h(app, props) })
            .use(plugin)
        window.vue = VueApp.mount(el)
    },
});
