import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.css' ]
})
export class ListComponent implements OnInit {
	urlList;
	constructor(private urlService: ProductService, private router: Router) {
		this.urlService.getdata().subscribe((data) => {
			this.urlList = data;
		});
	}

	ngOnInit(): void {}
}
