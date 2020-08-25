import Vue from 'vue'
import { Button,Form ,FormItem,Input} from 'element-ui'
import {Container,Header,Aside,Main,Footer} from 'element-ui'
import {Avatar,Dropdown,DropdownItem,DropdownMenu,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui'
import { Message,MessageBox } from 'element-ui';

Vue.prototype.$message=Message
Vue.prototype.$confirm=MessageBox.confirm
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Avatar)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
