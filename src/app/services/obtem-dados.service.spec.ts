import { TestBed } from '@angular/core/testing';

import { ObtemDadosService } from './obtem-dados.service';

describe('ObtemDadosService', () => {
  let service: ObtemDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtemDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
