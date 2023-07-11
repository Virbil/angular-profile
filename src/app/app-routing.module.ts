import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

const routes: Routes = [
  { path: 'first-component', component: FirstComponent,
    title: 'First component',
    children: [
      {
        path: 'child-a', // child route path
        title: resolvedChildATitle,
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        title: 'child b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ]
  },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
