import { Component, OnInit } from '@angular/core';
import '@carbon/web-components/es/components/dropdown/index.js';

@Component({
	selector: 'app-catalog',
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
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

	constructor() { }

	ngOnInit() {
	}

}
