import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TratamientosComponent } from './componentes/tratamientos/tratamientos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';


export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'tratamientos', component: TratamientosComponent },
  { path: 'contacto', component: ContactoComponent },
];
