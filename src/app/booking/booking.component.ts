import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {

  constructor(private Auth: LoginService) { }
  
  rowData: any;
  
  ngOnInit() {
    this.Auth.TraerBooking().subscribe(response=>{
      console.log(response, "Respuesta");     
      let json_a_retornar = []; 
      for(var i=0; i < Object.keys(response).length; i++){       
        var json = JSON.parse(response[i].bookingFields);        
        var nombre = json.firstName+" "+json.lastName;
        var bookingId = response[i].bookingId;
        var bookingTime = response[i].bookingTime;
        var streetAddress = json.location.streetAddress;
        var bookingPrice = response[i].bookingPrice;
        var to_json = {"nombre":nombre, "bookingId": bookingId, "bookingTime":bookingTime,"streetAddress":streetAddress,"bookingPrice":bookingPrice}
        json_a_retornar.push(to_json);
      }
      this.rowData = json_a_retornar;
                  
    }, err => {
      console.log(err);
      
    });
  }
  
  columnDefs = [
    {headerName: 'BookingId', field: 'bookingId', sortable: true, filter: true},
    {headerName: 'Cliente', field: 'nombre', sortable: true, filter: true},
    {headerName: 'Fecha de Creación', field: 'bookingTime', sortable: true, filter: true, type:'date'},
    {headerName: 'Dirección', field: 'streetAddress', sortable: true, filter: true},
    {headerName: 'Precio', field: 'bookingPrice', sortable: true, filter: true}
];

    
}
