import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import slugify from 'slugify';

import { ProductDetail } from 'src/app/models/productDetail.model';
import { Subcategories } from 'src/app/models/subcategories.model';

import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  product?: ProductDetail;
  productForm!: FormGroup;
  subcategories: Subcategories[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      slug: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      image_link: ['', Validators.required],
      image_file: [null, Validators.required],
      subcategory: ['', Validators.required],
    });

    this.productService.getSubcategories().subscribe(
      (subcategories: Subcategories[]) => {
        this.subcategories = subcategories;
      },
      (error) => {
        console.error('Error fetching subcategories:', error);
      }
    );
  }

  createProduct() {
    if (this.productForm?.invalid || !this.productForm.value.subcategory) {
      return;
    }

    const selectedSubcategoryId = this.productForm.value.subcategory;
    const selectedSubcategory = this.subcategories.find(
      (subcategory) => subcategory.id === selectedSubcategoryId
    );

    if (!selectedSubcategory) {
      console.error('La categoria seleccionada no existe');
      return;
    }

    const productData = {
      ...this.productForm.value,
      subcategory: selectedSubcategory.id,
      created_by: this.authService.getUserId(),
    };

    console.log('Product Data:', productData);

    this.productService.createProduct(productData).subscribe({
      next: (response: ProductDetail) => {
        console.log('Producto creado:', response);
        alert('Producto creado con éxito');
        this.productForm.reset();
      },
      error: (error) => {
        console.error('Error al crear el producto:', error);
      },
    });
  }
}
