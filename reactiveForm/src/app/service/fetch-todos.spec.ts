import { TestBed } from '@angular/core/testing';

import { FetchTodos } from './fetch-todos';

describe('FetchTodos', () => {
  let service: FetchTodos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchTodos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
