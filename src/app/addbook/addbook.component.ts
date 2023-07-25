import { Component } from '@angular/core';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from './Book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  selectedFile: any = {};
  AddBook!: FormGroup;
  addBookData: Book = new Book();
  fileUrl: string = '';
  progress: any;

  constructor(public storage: Storage, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.AddBook = this.formBuilder.group({
      title: '',
      author: '',
      price: '',
      partnerWritter: '',
      isbnNumber: ''
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadBookData() {
    this.uploadPdf().then(() => {
      this.addBookData.Title = this.AddBook.value.title;
      this.addBookData.Name = this.AddBook.value.author;
      this.addBookData.Price = this.AddBook.value.price;
      this.addBookData.PartnerWritter = this.AddBook.value.partnerWritter;
      this.addBookData.isbnNumber = this.AddBook.value.isbnNumber;
      this.addBookData.FileUrl = this.fileUrl;

      console.log(this.addBookData);
    });
  }

  uploadPdf(): Promise<void> {
    const storageRef = ref(this.storage, "/Books_Folder/" + this.selectedFile?.name);
    const uploadTask = uploadBytesResumable(storageRef, this.selectedFile);

    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.progress = progress;
      }, (error) => {
        console.log(error.message);
        reject(error);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          this.fileUrl = downloadUrl;
          
          resolve();
        }).catch((error) => {
          console.log(error.message);
          reject(error);
        });
      });
    });
  }
}