import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensAleatoriasComponent } from './imagens-aleatorias.component';

describe('ImagensAleatoriasComponent', () => {
  let component: ImagensAleatoriasComponent;
  let fixture: ComponentFixture<ImagensAleatoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagensAleatoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagensAleatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
