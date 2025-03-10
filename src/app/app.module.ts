import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { IconModule, IconService, ThemeModule, UIShellModule } from 'carbon-components-angular';

// Icons
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';

// Components
import { HeaderComponent } from './header/header.component';
import { DocsComponent } from './pages/docs/docs.component';
import { SupportComponent } from './pages/support/support.component';
import { Link1Component } from './pages/link1/link1.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		DocsComponent,
		SupportComponent,
		Link1Component
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		UIShellModule,
		IconModule,
		ThemeModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(protected iconService: IconService) {
		iconService.registerAll([
			Notification20,
			UserAvatar20
		]);
	}
}
