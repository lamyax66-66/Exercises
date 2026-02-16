import { TestBed } from '@angular/core/testing';

import { ToDoService } from './fetch-todos';

describe('FetchTodos', () => {
  let service: ToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
