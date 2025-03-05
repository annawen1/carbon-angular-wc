import { DOCUMENT } from "@angular/common";
import { Component, OnInit, Renderer2, inject } from "@angular/core";

import '@carbon/ibm-products-web-components/es/components/tearsheet/index.js';
// The following are used for slotted fields
import '@carbon/web-components/es/components/button/index.js';

@Component({
  selector: "app-starter-home",
  templateUrl: "./starter-home.component.html",
  styleUrls: ["./starter-home.component.scss"],
})
export class StarterHomeComponent implements OnInit {
  theme = "white";
  dropdownItems = [
    {
      content: "Tuscaloosa",
      id: "Tuscaloosa",
      text: "Tuscaloosa",
      selected: true,
    },
    {
      content: "Phoenix",
      id: "Phoenix",
      text: "Phoenix",
      selected: false,
    },
    {
      content: "Birmingham",
      id: "Birmingham",
      text: "Birmingham",
      selected: false,
    },
    {
      content: "Trenton",
      id: "Trenton",
      text: "Trenton",
      selected: false,
    },
    {
      content: "Lexington",
      id: "Lexington",
      text: "Lexington",
      selected: false,
    },
    {
      content: "Palm Beach Gardens",
      id: "Palm Beach Gardens",
      text: "Palm Beach Gardens",
      selected: false,
    },
    {
      content: "Dover",
      id: "Dover",
      text: "Dover",
      selected: false,
    },
    {
      content: "Columbus",
      id: "Columbus",
      text: "Columbus",
      selected: false,
    },
    {
      content: "Loretto",
      id: "Loretto",
      text: "Loretto",
      selected: false,
    },
    {
      content: "Mt Sterling",
      id: "Mt Sterling",
      text: "Mt Sterling",
      selected: false,
    },
    {
      content: "Bozeman",
      id: "Bozeman",
      text: "Bozeman",
      selected: false,
    },
    {
      content: "Los Alamos",
      id: "Los Alamos",
      text: "Los Alamos",
      selected: false,
    },
    {
      content: "Hemphill",
      id: "Hemphill",
      text: "Hemphill",
      selected: false,
    },
    {
      content: "Vancouver",
      id: "Vancouver",
      text: "Vancouver",
      selected: false,
    },
    {
      content: "Waukesha",
      id: "Waukesha",
      text: "Waukesha",
      selected: false,
    },
    {
      content: "San Diego",
      id: "San Diego",
      text: "San Diego",
      selected: false,
    },
    {
      content: "Washington",
      id: "Washington",
      text: "Washington",
      selected: false,
    },
    {
      content: "Troy",
      id: "Troy",
      text: "Troy",
      selected: false,
    },
    {
      content: "Salina",
      id: "Salina",
      text: "Salina",
      selected: false,
    },
    {
      content: "Bentonville",
      id: "Bentonville",
      text: "Bentonville",
      selected: false,
    },
  ];
  openTearsheet = false;
  openModal = false;

  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);

  ngOnInit() {
    // Apply default class to body
    this.renderer.addClass(this.document.body, this.theme);
  }

  onThemeChange({ value }: { value: string }) {
    // Remove current assigned class then add updated class
    this.renderer.removeClass(this.document.body, this.theme);
    this.theme = value;
    this.renderer.addClass(this.document.body, this.theme);
  }

  navigateToBuilder() {
    window.open("https://builder.carbondesignsystem.com/", "_blank");
  }
}
