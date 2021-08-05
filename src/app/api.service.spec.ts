import { TestBed } from '@angular/core/testing';
// import { defer } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { HttpClient } from "@angular/common/http";

describe('ApiService', () => {
  // let httpClientSpy: { get: jasmine.Spy };
  let service: ApiService;
  let httpClient: HttpClient;
  // let httpMock: HttpTestingController;

  // function asyncData<T>(data: T) {
  //   return defer(() => Promise.resolve(data));
  // }

  beforeEach(() => {
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // TestBed.configureTestingModule({providers: [ApiService]});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    }).compileComponents();
    service = TestBed.inject(ApiService);
    httpClient = TestBed.inject(HttpClient);
    // httpMock = TestBed.inject(HttpTestingController)
    // service = new ApiService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return the Api data', ()=>{
    service.justAcall().subscribe( data => {
      expect(data).toBeTruthy();   
    })
  })
});
