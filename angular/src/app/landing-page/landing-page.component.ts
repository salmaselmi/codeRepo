import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

    testImg = 'assets/Untitled.png';
    imgUrl = this.testImg;
    fileValue: string;
    file: any;
    images: any[];
    isAlert: boolean = false;
  
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.loadImages();
    }
    loadImages() {
      this.http.get('/api/images').subscribe((resp: any[]) => {
        this.images = resp;
      })
    }
    onFileChange(event) {
      const reader = new FileReader();
      console.log(this.fileValue);
      if (event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imgUrl = reader.result as string;
          this.file = reader.result
          console.log(this.file);
  
        };
      }
    }
    uploadToBackend() {
      const body = {
        id: parseInt((Math.random() * 10) + ''),
        name: this.fileValue.substring(this.fileValue.lastIndexOf('\\') + 1),
        data: this.file as string
      };
      this.http.post('/api/images', body).subscribe(resp => {
        this.isAlert = true;
        this.loadImages();
        this.imgUrl = this.testImg;
        this.fileValue = null;
        setTimeout(() => {
          this.isAlert = false;
        }, 5000)
      })
    }
  
  }