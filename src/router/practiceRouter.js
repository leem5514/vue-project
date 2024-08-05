import VuetifyComponent from '@/components/practice/VuetifyComponent.vue';
import ModelingComponent from '@/components/practice/ModelingComponent';
import ConditionalComponent from '@/components/practice/ConditionalComponent.vue';
import HookComponent from '@/components/practice/HookComponent.vue'
import WatchUpdateComponent from '@/components/practice/WatchUpdateComponent.vue';
import AxiosTestComponent from '@/components/practice/AxiosTestComponent.vue';
import RouterTestComponent from '@/components/practice/RouterTestComponent.vue';

export const practiceRouter = [
    {
        path: '/practice/vuetify',
        name: 'VuetifyComponent',
        component: VuetifyComponent
    },
    {
        path: '/practice/modeling',
        name: 'ModelingComponent',
        component: ModelingComponent
    },
    {
        path: '/practice/conditional',
        name: 'ConditionalComponent',
        component: ConditionalComponent
    },
    {
        path: '/practice/hook',
        name: 'HookComponent',
        component: HookComponent
    },
    {
        path: '/practice/hook-watch-update',
        name: 'WatchUpdateComponent',
        component: WatchUpdateComponent
    },
    {
        path: '/practice/axiostest',
        name: 'AxiosTestComponent',
        component: AxiosTestComponent
    },
    {
        path: '/practice/routertest',
        name: 'RouterTestComponent',
        Component: RouterTestComponent
    },
    

]