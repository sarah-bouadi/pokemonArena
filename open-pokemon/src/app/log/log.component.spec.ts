import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:open-pokemon/src/app/battle/battle.component.spec.ts
import { BattleComponent } from './battle.component';

describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleComponent ]
=======
import { LogComponent } from './log.component';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogComponent ]
>>>>>>> 1b60e833731847ca8198e5c199a113c2460b2e6e:open-pokemon/src/app/log/log.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:open-pokemon/src/app/battle/battle.component.spec.ts
    fixture = TestBed.createComponent(BattleComponent);
=======
    fixture = TestBed.createComponent(LogComponent);
>>>>>>> 1b60e833731847ca8198e5c199a113c2460b2e6e:open-pokemon/src/app/log/log.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
