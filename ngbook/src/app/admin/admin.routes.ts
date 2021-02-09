import {Routes} from '@angular/router';
import {ListAdminComponent} from './list-admin/list-admin.component';
import {HomeAdminComponent} from './home-admin/home-admin.component';
import {AdminUserCreateComponent} from './admin-user-create/admin-user-create.component';

// * gruppo di route , che consente di condividere attributi (name space, middleware, ecc…) 

export const adminRoutes: Routes = [
    {path: '', component: HomeAdminComponent},
    {path: 'users', component: ListAdminComponent},
    {path: 'users/create', component: AdminUserCreateComponent},
  ];