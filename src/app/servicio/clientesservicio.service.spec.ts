import { TestBed } from '@angular/core/testing';

import { ClientesservicioService } from './clientesservicioservice';

describe('ClientesservicioService', () => {
  let service: ClientesservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
