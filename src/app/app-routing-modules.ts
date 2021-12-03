import { PrincipalComponent } from './shared/components/principal/principal.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PromocaoComponent } from './shared/components/promocao/promocao.component';
import { ConstrucaoComponent } from './shared/components/construcao/construcao.component';


export const routes: Routes = [
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'principal', component: PrincipalComponent},
  {path: 'promocao', component: PromocaoComponent},
  {path: 'construcao', component: ConstrucaoComponent},

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
}
)


export class AppRoutingModule {

}
