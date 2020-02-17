import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AccountsList from '../components/Accounts/List'
import AccountsView from '../components/Accounts/View'
import AccountsCreate from '../components/Accounts/Create'
import AccountsEdit from '../components/Accounts/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/contas', name: 'AccountList', component: AccountsList},
    {path: '/contas/novo', name: 'AccountCreate', component: AccountsCreate},
    {path: '/contas/:id', name: 'AccountView', component: AccountsView},
    {path: '/contas/:id/editar', name: 'AccountEdit', component: AccountsEdit}
  ]
})
