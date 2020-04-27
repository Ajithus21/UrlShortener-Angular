import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: [ './create.component.css' ]
})
export class CreateComponent implements OnInit {
	urlForm;
	constructor(private urlService: ProductService, private router: Router) {
		this.urlForm = new FormGroup({
			url: new FormControl('', Validators.required)
		});
	}

	ngOnInit(): void {}

	sendData() {
		if (this.urlForm.valid) {
			this.urlService.postdata(this.urlForm.value).subscribe((data) => {
				alert('Done');
				this.router.navigate([ 'urlList' ]);
			});
		}
	}
}
