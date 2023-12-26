import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Budget App';
  users: any; 
  
  // We inject the HTTP client here
  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    // Request to the API server -- Observer
    this.http.get("http://localhost:5000/api/users").subscribe({
      next: response => this.users = response,

      // If we get an error
      error: error => console.log(error),

      // Request is complete
      complete: () => console.log('Request has completed.') 
    });
  }
}
