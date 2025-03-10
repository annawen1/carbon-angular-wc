import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	ButtonModule,
	DropdownModule,
	GridModule,
	IconModule,
	IconService,
	ListModule,
	ModalModule,
	RadioModule,
	TabsModule,
	TilesModule
} from 'carbon-components-angular';

import CarbonBuilder16 from '@carbon/icons/es/carbon--ui-builder/16';

import { StarterHomeComponent } from './starter-home/starter-home.component';
import { StarterHomeRoutingModule } from './starter-home-routing.module';

@NgModule({
	imports: [
		CommonModule,
		StarterHomeRoutingModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule,
		RadioModule,
		ButtonModule,
		IconModule,
		DropdownModule,
		ModalModule
	],
	declarations: [StarterHomeComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StarterHomeModule {
	constructor(protected iconService: IconService) {
		iconService.register(CarbonBuilder16);
	}
}
