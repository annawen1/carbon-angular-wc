import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './catalog.component';
import { CatalogComponentModule } from './catalog-routing.module';
import { DropdownModule } from 'carbon-components-angular';

@NgModule({
    imports: [
        CommonModule,
        CatalogComponentModule
    ],
    declarations: [CatalogComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatalogModule {
    
}
