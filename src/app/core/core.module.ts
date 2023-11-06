import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
