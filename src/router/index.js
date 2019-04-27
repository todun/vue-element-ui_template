import Vue from 'vue';
import Router from 'vue-router';
import Register from '../pages/register.vue';
import Login from '../pages/login.vue';
import ForgetPassword from '../pages/forget_password.vue';
import UserIndex from '../pages/user_index.vue';
import Chat from '@components/user_components/chat/chat';
import Consult from '@components/user_components/consult/consult';
import Preference from '@components/user_components/preference/preference';
import Record from '@components/user_components/record/record';
import UserInformation from '@components/user_components/user_information/user_information';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/register', component: Register},
        {path: '/login', component: Login},
        {path: '/forget_password', component: ForgetPassword},
        {path: '/user_index', component: UserIndex,
        children: [
            {path: 'chat', components: {
                default: Chat, 
                information: UserInformation
            }},
            {path: 'consult', components:{
                default: Consult, 
                information: UserInformation
            }},
            {path: 'preference', components:{
                default: Preference, 
                information: UserInformation
            }},
            {path: 'record', components:{
                default: Record, 
                information: UserInformation
            }},
        ]
    }
    ],
});
